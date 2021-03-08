export const getUrlParameter = (name, url = window.location.href) => {
  const nameFormated = name.replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
  const regex = new RegExp(`[\\?&]${nameFormated}=([^&#]*)`);
  const results = regex.exec(url);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};
