import { ref } from 'vue';
export class RefData {
    constructor() {
        this.currentRoute = ref('/');
        this._themeColor = ref('black');
    }
    static getInstance() {
        if (this.instance == null) {
            this.instance = new RefData();
            let localTheme = localStorage.getItem('nutui-theme-color');
            if (localTheme) {
                this.instance.themeColor.value = localTheme;
            }
        }
        return this.instance;
    }
    get themeColor() {
        return this._themeColor;
    }
    set themeColor(v) {
        this._themeColor = v;
    }
}
