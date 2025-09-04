import { Product, products } from '@/data/products';

export type UserAnswers = Record<string, string>;

export interface Recommendation {
  product: Product;
  score: number;
  reasons: string[];
}

export function getRecommendations(answers: UserAnswers): Recommendation[] {
  const pillowRecommendations = getPillowRecommendations(answers);
  const bolsterRecommendations = answers.use_bolster === 'ya' 
    ? getBolsterRecommendations(answers) 
    : [];

  return [...pillowRecommendations, ...bolsterRecommendations]
    .sort((a, b) => b.score - a.score);
}

function getPillowRecommendations(answers: UserAnswers): Recommendation[] {
  const pillows = products.filter(p => p.category === 'pillow');
  
  return pillows.map(pillow => {
    let score = 0;
    const reasons: string[] = [];

    // Sleep position scoring
    if (answers.sleep_position) {
      if (answers.sleep_position === 'telentang' || answers.sleep_position === 'miring') {
        if (pillow.specs.firmness === 'Medium') {
          score += 25;
          reasons.push('Kekencangan medium cocok untuk posisi tidur Anda');
        }
      } else if (answers.sleep_position === 'tengkurap') {
        if (pillow.specs.firmness === 'Soft') {
          score += 25;
          reasons.push('Bantal lembut ideal untuk posisi tengkurap');
        }
      }
    }

    // Firmness preference
    if (answers.firmness) {
      const firmness = answers.firmness;
      if (
        (firmness === 'lembut' && pillow.specs.firmness === 'Soft') ||
        (firmness === 'sedang' && pillow.specs.firmness === 'Medium') ||
        (firmness === 'keras' && pillow.specs.firmness === 'Firm')
      ) {
        score += 30;
        reasons.push('Sesuai dengan preferensi kekencangan Anda');
      }
    }

    // Loft preference
    if (answers.loft) {
      if (answers.loft === 'rendah' && pillow.specs.firmness === 'Soft') {
        score += 20;
        reasons.push('Tinggi bantal rendah untuk kenyamanan optimal');
      } else if (answers.loft === 'sedang' && pillow.specs.firmness === 'Medium') {
        score += 20;
        reasons.push('Tinggi bantal sedang sesuai preferensi');
      } else if (answers.loft === 'tinggi' && pillow.specs.firmness === 'Medium') {
        score += 15;
        reasons.push('Memberikan dukungan tinggi yang baik');
      }
    }

    // Allergy consideration
    if (answers.allergy === 'ya') {
      // Prioritize synthetic or treated options (Silky Feather has synthetic silk)
      if (pillow.slug === 'silky-feather-pillow') {
        score += 25;
        reasons.push('Mengandung sutra sintetis yang hypoallergenic');
      } else {
        score -= 10; // Reduce score for pure down products
      }
    } else {
      // Pure down products are preferred if no allergies
      if (pillow.specs.fill.includes('Down')) {
        score += 15;
        reasons.push('Bulu angsa premium untuk kenyamanan maksimal');
      }
    }

    // Heat sensitivity
    if (answers.heat === 'panas') {
      if (pillow.slug === 'silky-feather-pillow') {
        score += 20;
        reasons.push('Sutra sintetis membantu regulasi suhu');
      } else if (pillow.specs.firmness === 'Medium') {
        score += 10;
        reasons.push('Sirkulasi udara yang baik');
      }
    }

    // Budget consideration
    if (answers.budget && pillow.price) {
      if (answers.budget === 'hemat' && pillow.price <= 700000) {
        score += 20;
        reasons.push('Sesuai dengan anggaran hemat');
      } else if (answers.budget === 'menengah' && pillow.price > 700000 && pillow.price <= 1500000) {
        score += 20;
        reasons.push('Pilihan terbaik untuk anggaran menengah');
      } else if (answers.budget === 'premium' && pillow.price > 1500000) {
        score += 20;
        reasons.push('Produk premium dengan kualitas terbaik');
      }
    }

    return {
      product: pillow,
      score,
      reasons
    };
  });
}

function getBolsterRecommendations(answers: UserAnswers): Recommendation[] {
  const bolsters = products.filter(p => p.category === 'bolster');
  
  return bolsters.map(bolster => {
    let score = 0;
    const reasons: string[] = [];

    // Firmness preference for bolster
    if (answers.firmness) {
      const firmness = answers.firmness;
      if (
        (firmness === 'lembut' && bolster.specs.firmness === 'Soft') ||
        (firmness === 'sedang' && bolster.specs.firmness === 'Medium') ||
        (firmness === 'keras' && bolster.specs.firmness === 'Firm')
      ) {
        score += 25;
        reasons.push('Kekencangan guling sesuai preferensi');
      }
    }

    // Sleep position for bolster
    if (answers.sleep_position === 'miring') {
      score += 20;
      reasons.push('Guling sangat cocok untuk posisi tidur miring');
    }

    // Budget consideration
    if (answers.budget && bolster.price) {
      if (answers.budget === 'hemat' && bolster.price <= 900000) {
        score += 15;
        reasons.push('Guling dengan harga terjangkau');
      } else if (answers.budget === 'menengah' && bolster.price > 900000 && bolster.price <= 1200000) {
        score += 15;
        reasons.push('Guling berkualitas dengan harga wajar');
      } else if (answers.budget === 'premium' && bolster.price > 1200000) {
        score += 15;
        reasons.push('Guling premium untuk kenyamanan maksimal');
      }
    }

    // Allergy consideration
    if (answers.allergy === 'ya') {
      score -= 5; // Bolsters are mostly down-filled
    } else {
      score += 10;
      reasons.push('Bulu angsa berkualitas tinggi');
    }

    return {
      product: bolster,
      score,
      reasons
    };
  });
}
