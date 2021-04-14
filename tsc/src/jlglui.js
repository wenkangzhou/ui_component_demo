import Avatar from './packages/avatar/index.vue';
function install(app) {
    const packages = [Avatar];
    packages.forEach((item) => {
        if (item.install) {
            app.use(item);
        }
        else if (item.name) {
            app.component(item.name, item);
        }
    });
}
export { Avatar };
export default { install, version: '1.0.0' };
