import { HomeController } from "./controllers/home-controller";
import { Contact } from "./models/contact";
import { Route } from "./router/route";
import { Router } from "./router/router";
import { ContactService } from "./services/contact-service";
import { RowHelper } from "./_helpers/row-helper";

const router = new Router()
router.register('/', new HomeController())

window.addEventListener(
    'hashchange',
    () => {
        console.log(`Detect hashchange`)
        router.navigate()
    }
)

window.addEventListener(
    'load',
    () => {
        console.log(`Detect page loading`)
        router.navigate()
    }
)

document.addEventListener('DOMContentLoaded', (event) => {
    setTimeout(() => {
        document.querySelector('div.outer-splash').classList.add('hidden')
    }, 1000)

});