import { createRouter, createWebHistory } from "vue-router";
import Home from "/src/components/Home.vue";
import Medals from "/src/components/Medals.vue";
import Boosts from "/src/components/Boosts.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/medals",
        name: "Medals",
        component: Medals,
    },
    {
        path: "/boosts",
        name: "Boosts",
        component: Boosts,
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;
