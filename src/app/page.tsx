import InputForm from '@/components/input-form';
import { env } from '@/lib/environment';

export default function Home() {
  console.log('env: ', env);

  return (
    <div className="flex flex-col items-center space-y-3">
      <h1 className="text-4xl text-white text-center">
        YouTube to MP3 Converter
      </h1>
      <h2 className="text-white text-center">
        유튜브 주소를 가져와서 음원을 추출하세요.
      </h2>

      <InputForm />
    </div>
  );
}
