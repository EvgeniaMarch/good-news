const loaderRouter = require('express').Router();
const loading = require('../../components/loading');

loaderRouter.post('/showLoader', (req, res) => {
  try {
    res.json({ html: res.renderComponent(loading, {}, { doctype: false }) });
  } catch (error) {
    console.error(error);
  }
});

module.exports = loaderRouter;
