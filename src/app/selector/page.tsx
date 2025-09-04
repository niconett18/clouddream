import ProductSelector from '../(components)/selector/ProductSelector';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pilih Bantal & Guling Ideal | CloudDream',
  description: 'Temukan bantal dan guling yang sempurna untuk Anda dengan kuesioner interaktif kami. Dapatkan rekomendasi produk berdasarkan preferensi tidur Anda.',
  keywords: 'bantal hotel, guling hotel, rekomendasi bantal, pilih bantal, bulu angsa, down pillow',
};

export default function SelectorPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Temukan Bantal & Guling Ideal Anda
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Jawab beberapa pertanyaan sederhana dan dapatkan rekomendasi produk CloudDream 
            yang paling sesuai dengan preferensi dan kebutuhan tidur Anda.
          </p>
        </div>
        
        <ProductSelector />
      </div>
    </div>
  );
}
