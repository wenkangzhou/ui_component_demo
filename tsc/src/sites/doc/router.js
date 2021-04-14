import { createRouter, createWebHashHistory } from 'vue-router';
import Index from './views/Index.vue';
import Main from './views/Main.vue';
const pagesRouter = [];
const modulesPage = import.meta.glob('/src/packages/**/doc.md');
for (const path in modulesPage) {
    let name = /packages\/(.*)\/doc.md/.exec(path)[1];
    pagesRouter.push({
        path: '/' + name,
        component: modulesPage[path],
        name
    });
}
const modulesDocs = import.meta.glob('/src/docs/*.md');
for (const path in modulesDocs) {
    let name = /docs\/(.*).md/.exec(path)[1];
    pagesRouter.push({
        path: '/' + name,
        component: modulesDocs[path],
        name
    });
}
const routes = [
    {
        path: '/',
        name: '/',
        component: Main
    },
    {
        path: '/index',
        name: 'index',
        component: Index,
        children: pagesRouter
    }
];
routes.push({
    name: 'notFound',
    path: '/:path(.*)+',
    redirect: {
        name: '/'
    }
});
const router = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior(to) {
        if (to.hash) {
            const id = to.hash.split('#')[1];
            const ele = document.getElementById(id);
            setTimeout(() => {
                ele && ele.scrollIntoView(true);
            });
        }
    }
});
export default router;
