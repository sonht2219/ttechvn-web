export default function (req, res, next) {
  console.log(req.url, res.data)
  next()
}
