import { useRouter } from 'next/router';

function ScrollToTop() {
  const router = useRouter();
  // router.events.on('routeChangeComplete', () => {
  //   window.scrollTo(0, 0);
  // });

  return null;
}

export default ScrollToTop;
