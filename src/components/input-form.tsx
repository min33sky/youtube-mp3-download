'use client';
import { Button, buttonVariants } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import getYoutubeUrlParser from '@/lib/get-youtube-url-parser';
import fetchMp3 from '@/actions/fetchMp3';
import { useState } from 'react';
import Link from 'next/link';
import { SearchIcon } from 'lucide-react';

const formSchema = z.object({
  url: z.string(),
});

export default function InputForm() {
  const [isLoading, setIsLoading] = useState(true);
  const [downloadLink, setDownloadLink] = useState('');

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      url: '',
    },
  });

  const onSubmit = async (formData: z.infer<typeof formSchema>) => {
    try {
      setIsLoading(true);

      const parsedUrl = getYoutubeUrlParser(formData.url);

      if (!parsedUrl) {
        return;
      }

      const res = await fetchMp3(parsedUrl);

      if (!res) {
        alert('Something went wrong');
        return;
      }

      console.log('res: ', res);

      setDownloadLink(res.link);
    } catch (error) {
      console.error(error);
      alert('Something went wrong');
    } finally {
      setIsLoading(false);
    }
  };

  console.log('downloadLink: ', downloadLink);

  return (
    <div className="flex flex-col items-center space-y-4">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 w-full flex flex-col items-center justify-center"
        >
          <FormField
            control={form.control}
            name="url"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative">
                    <SearchIcon className="absolute top-1/2 left-2 -translate-y-1/2 w-4 h-4" />
                    <Input
                      placeholder="https://www.youtube.com/watch?v="
                      className="bg-white w-[300px] pl-8"
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            isLoading={isLoading}
            disabled={isLoading}
            type="submit"
            size={'lg'}
          >
            {isLoading ? '변환 중...' : '변환하기'}
          </Button>
        </form>
      </Form>

      {downloadLink ? (
        <Link
          href={downloadLink}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants({
            variant: 'link',
            className: 'text-rose-100 text-lg',
          })}
        >
          다운로드
        </Link>
      ) : null}
    </div>
  );
}
