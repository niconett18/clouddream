'use client';

import { useState } from 'react';
import { QUESTIONS, Question, Answer } from './questions';
import { getRecommendations, UserAnswers, Recommendation } from './recommendation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductSelector() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<UserAnswers>({});
  const [showResults, setShowResults] = useState(false);
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);

  const currentQuestion = QUESTIONS[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === QUESTIONS.length - 1;


  const handleAnswer = (answer: Answer) => {
    const newAnswers = {
      ...answers,
      [currentQuestion.id]: answer.id
    };
    setAnswers(newAnswers);

    if (isLastQuestion) {
      // Generate recommendations
      const recs = getRecommendations(newAnswers);
      setRecommendations(recs);
      setShowResults(true);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const goBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const restart = () => {
    setCurrentQuestionIndex(0);
    setAnswers({});
    setShowResults(false);
    setRecommendations([]);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  if (showResults) {
    const topRecommendations = recommendations.filter(r => r.score > 20).slice(0, 3);
    
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Rekomendasi Produk untuk Anda
          </h2>
          <p className="text-gray-600">
            Berdasarkan jawaban Anda, berikut adalah produk terbaik yang kami rekomendasikan:
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
          {topRecommendations.map((rec, index) => (
            <Card key={rec.product.id} className="relative overflow-hidden hover:shadow-lg transition-shadow">
              {index === 0 && (
                <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
                  Rekomendasi Terbaik
                </div>
              )}
              
              <CardHeader className="p-0">
                <div className="relative h-48 w-full">
                  <Image
                    src={rec.product.images[0]}
                    alt={rec.product.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <CardTitle className="text-lg mb-2 line-clamp-2">
                  {rec.product.name}
                </CardTitle>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {rec.product.shortDesc}
                </p>

                {rec.product.price && (
                  <div className="mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-green-600">
                        {formatPrice(rec.product.price)}
                      </span>
                      {rec.product.originalPrice && (
                        <span className="text-sm text-gray-400 line-through">
                          {formatPrice(rec.product.originalPrice)}
                        </span>
                      )}
                    </div>
                    {rec.product.originalPrice && (
                      <div className="text-sm text-green-600 font-semibold">
                        Hemat {formatPrice(rec.product.originalPrice - rec.product.price)}
                      </div>
                    )}
                  </div>
                )}

                <div className="mb-4">
                  <h4 className="font-semibold text-sm mb-2">Mengapa cocok untuk Anda:</h4>
                  <ul className="text-xs text-gray-600 space-y-1">
                    {rec.reasons.slice(0, 3).map((reason, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        {reason}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-2">
                  <Button 
                    asChild 
                    className="flex-1"
                  >
                    <Link href={`/our-product/${rec.product.category}/${rec.product.slug}`}>
                      Lihat Detail
                    </Link>
                  </Button>
                  
                  {rec.product.shopeeLink && (
                    <Button 
                      asChild 
                      variant="outline"
                      className="flex-1"
                    >
                      <a 
                        href={rec.product.shopeeLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        Beli di Shopee
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button onClick={restart} variant="outline">
            Mulai Ulang Kuesioner
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-900">
            Temukan Bantal & Guling Ideal Anda
          </h2>
          <span className="text-sm text-gray-500">
            {currentQuestionIndex + 1} dari {QUESTIONS.length}
          </span>
        </div>
        
        {/* Progress Bar */}
        <div className="w-full h-2 rounded-full bg-[#001435]/15 overflow-hidden" aria-hidden="true">
          <div
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={QUESTIONS.length}
            aria-valuenow={currentQuestionIndex + 1}
            aria-label="Progress kuisioner"
            className="h-full rounded-full bg-[#001435] transition-all duration-300"
            style={{ width: `${((currentQuestionIndex + 1) / QUESTIONS.length) * 100}%` }}
          />
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl">
            {currentQuestion.title}
          </CardTitle>
          {currentQuestion.subtitle && (
            <p className="text-gray-600">{currentQuestion.subtitle}</p>
          )}
        </CardHeader>
        
        <CardContent>
          <div className={`grid gap-4 ${
            currentQuestion.answers.length === 2 
              ? 'grid-cols-1 sm:grid-cols-2 max-w-2xl mx-auto' 
              : currentQuestion.answers.length === 3
              ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
              : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
          }`}>
            {currentQuestion.answers.map((answer) => (
              <Button
                key={answer.id}
                variant="outline"
                className="h-40 sm:h-44 p-6 flex items-center justify-center text-center hover:bg-[#001435]/5 hover:border-[#001435] transition-all duration-200 border-2 border-gray-200 rounded-xl group shadow-sm hover:shadow-md"
                onClick={() => handleAnswer(answer)}
              >
                <span className="text-sm sm:text-base font-semibold text-[#001435] group-hover:text-[#003366] leading-snug">
                  {answer.label}
                </span>
              </Button>
            ))}
          </div>
          
          {currentQuestionIndex > 0 && (
            <div className="mt-6">
              <Button 
                variant="ghost" 
                onClick={goBack}
                className="text-gray-600"
              >
                ← Kembali
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
