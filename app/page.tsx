import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: "Check allocation"
    }
  ],
  image: `https://cdn.discordapp.com/attachments/892878888445804545/1083049214948409424/FqJkIcSWAAsuyMz.png?ex=65fb012e&is=65e88c2e&hm=fc63d1ad4854e2bb446235dc2f82a6cad846dde1e06457a53ab5ec325a8d608c&`,
  post_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/frame`,
});

export const metadata: Metadata = {
  title: '$ROYAL',
  description: 'A frame to see your allocation of $ROYAL',
  openGraph: {
    title: '$ROYAL Token',
    description: 'A frame to see your allocation of $ROYAL',
    images: [`https://cdn.discordapp.com/attachments/892878888445804545/1083049214948409424/FqJkIcSWAAsuyMz.png?ex=65fb012e&is=65e88c2e&hm=fc63d1ad4854e2bb446235dc2f82a6cad846dde1e06457a53ab5ec325a8d608c&`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>$ROYAL Token</h1>
    </>
  );
}
