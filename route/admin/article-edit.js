module.exports = (req, res) => {

    // 标识 当前文章管理页面
    req.app.locals.currentLink = 'article'

    res.render('admin/article-edit.art')
}