// app/(components)/selector/questions.ts
export type Answer = { id: string; label: string; icon?: string; meta?: Record<string, unknown> };
export type Question = { id: string; title: string; subtitle?: string; type: 'single'; answers: Answer[] };

export const QUESTIONS: Question[] = [
  {
    id: 'sleep_position',
    title: 'Posisi tidur Anda paling sering?',
    type: 'single',
    answers: [
      { id: 'telentang', label: 'Telentang', icon: 'sleep_position_telentang' },
      { id: 'miring', label: 'Miring', icon: 'sleep_position_miring' },
      { id: 'tengkurap', label: 'Tengkurap', icon: 'sleep_position_tengkurap' }
    ]
  },
  {
    id: 'firmness',
    title: 'Tingkat kekempukan yang Anda suka?',
    type: 'single',
    answers: [
      { id: 'lembut', label: 'Lembut', icon: 'firmness_lembut' },
      { id: 'sedang', label: 'Sedang', icon: 'firmness_sedang' },
      { id: 'keras', label: 'Kencang/Keras', icon: 'firmness_keras' }
    ]
  },
  {
    id: 'loft',
    title: 'Tinggi bantal (loft) yang nyaman?',
    type: 'single',
    answers: [
      { id: 'rendah', label: 'Rendah', icon: 'loft_rendah' },
      { id: 'sedang', label: 'Sedang', icon: 'loft_sedang' },
      { id: 'tinggi', label: 'Tinggi', icon: 'loft_tinggi' }
    ]
  },
  {
    id: 'allergy',
    title: 'Apakah Anda sensitif/alergi terhadap bulu?',
    type: 'single',
    answers: [
      { id: 'ya', label: 'Ya, pilih yang hypoallergenic', icon: 'allergy_ya' },
      { id: 'tidak', label: 'Tidak', icon: 'allergy_tidak' }
    ]
  },
  {
    id: 'heat',
    title: 'Saat tidur, Anda cenderung…',
    type: 'single',
    answers: [
      { id: 'panas', label: 'Mudah merasa panas', icon: 'heat_panas' },
      { id: 'normal', label: 'Normal', icon: 'heat_normal' }
    ]
  },
  {
    id: 'use_bolster',
    title: 'Apakah Anda ingin rekomendasi guling juga?',
    type: 'single',
    answers: [
      { id: 'ya', label: 'Ya', icon: 'bolster_ya' },
      { id: 'tidak', label: 'Tidak', icon: 'bolster_tidak' }
    ]
  },
  {
    id: 'budget',
    title: 'Perkiraan anggaran per item?',
    type: 'single',
    answers: [
      { id: 'hemat', label: 'Hemat', icon: 'budget_hemat' },
      { id: 'menengah', label: 'Menengah', icon: 'budget_menengah' },
      { id: 'premium', label: 'Premium', icon: 'budget_premium' }
    ]
  }
];
