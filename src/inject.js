/**
 * @name personal-footer
 * @author cyntler <damian@cyntler.com>
 */
const inject = () => {
  if (typeof document === 'undefined') {
    return;
  }

  const iframe = document.createElement('iframe');
  iframe.src = 'https://footer.cyntler.com';
  iframe.style.width = '100%';
  iframe.style.height = '75px';
  iframe.style.position = 'relative';
  iframe.style.overflow = 'hidden';
  iframe.style.border = '0';

  document.body.append(iframe);
};

inject();
