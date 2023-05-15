const Url = {
  parseActiveWithCombiner() {
    const getUrl = window.location.hash.slice(1).toLowerCase();
    const splite = this._urlSplitter(getUrl);

    return this._urlCombiner(splite);
  },

  parseActiveWithoutCombiner() {
    const getUrl = window.location.hash.slice(1).toLowerCase();
    return this._urlSplitter(getUrl);
  },

  _urlSplitter(url) {
    const splitUrl = url.split('/');
    return {
      resource: splitUrl[1] || null,
      id: splitUrl[2] || null,
      verb: splitUrl[3] || null,
    };
  },

  _urlCombiner(spliteUrl) {
    return (spliteUrl.resource ? `/${spliteUrl.resource}` : '/')
        + (spliteUrl.id ? '/:id' : '')
        + (spliteUrl.verb ? `/${spliteUrl.verb}` : '');
  },
};

export default Url;
