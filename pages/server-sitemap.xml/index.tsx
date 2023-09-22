// pages/server-sitemap.xml/index.tsx 파일을 생성한다.

import {getServerSideSitemapLegacy} from 'next-sitemap'
import {GetServerSideProps} from 'next'
import {data, setData} from '../../context/DataContext';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    // CMS의 URL을 가져온다 (articleId 를 리턴해주는 api 요청을 할 수 있겠다)
    // const urls = await fetch('https//example.com/api')
    let details = data.map(v => {
        return {
            loc: 'https://oogaooga.app/setDetail/' + v.id, // Absolute url
            lastmod: new Date().toISOString(),
            // changefreq
            // priority
        }
    });;
    let sets = setData.map(v => {
        return {
            loc: 'https://oogaooga.app/detail/' + v.id, // Absolute url
            lastmod: new Date().toISOString(),
            // changefreq
            // priority
        }
    });
    let fields = [
        ...details, ...sets
    ]

    return getServerSideSitemapLegacy(ctx, fields)
}

// Default export to prevent next.js errors
export default function Sitemap() {}