import AppButton from './components/AppButton.js'
import Nav from './components/Nav.js';
export default {
    data() {
        return {
            title:'hello vue'
        };
    },
    components: {
        'app-button':AppButton,
        'app-nav': Nav
    },
};

