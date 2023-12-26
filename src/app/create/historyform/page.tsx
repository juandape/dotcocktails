import BackButton from '@/components/back-button';
import CocktailCard from '@/components/cocktails-card';

export default function HistoryFormPage() {
  return (
    <div>
      <BackButton />
      <div className='text-4xl font-bold text-peach-fuzz text-center sm:my-6 mt-20 mb-6'>History Form</div>
      <CocktailCard />
    </div>
  );
}
