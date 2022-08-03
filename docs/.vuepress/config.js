module.exports = {
    title: 'Resumen Desarrollo Web',
    description: 'Aquí pondré un resumen de todo lo que he estudiado sobre el Desarrollo Web',
    themeConfig: {
        nav: [

            { text: 'Home', link: '/' },
            { text: 'Front-End', link: '/frontend/' }
        ],
        sidebar: {
            '/frontend/': getResumenesSidebar()
        },
        

    },
    plugins: ['@vuepress/last-updated']
};

function getResumenesSidebar() {
    return [

        {
            'title': 'Front-End',
            children: [
                'HTML',
                'hola'
            ]
        }


    ]
}