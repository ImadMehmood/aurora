import { icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8, icon9 } from "../assets";

export const menu = [
    {
        id: 1,
        title: "main",
        listItems: [
            {
                id: 1,
                title: "Server Dashboard",
                url: "/",
                icon: icon1
            },
            {
                id: 2,
                title: "Customer Management",
                url: "/users/1",
                icon: icon2
            },
        ],
    },
    {
        id: 2,
        title: "lists",
        listItems: [
            {
                id: 1,
                title: "Middleware Configuration",
                url: "/users",
                icon: icon3
            },
            {
                id: 2,
                title: "Integration Management",
                url: "/products",
                icon: icon4
            },
            {
                id: 3,
                title: "Monitoring & Alerts ",
                url: "/orders",
                icon: icon5
            },
            {
                id: 4,
                title: "Billing & Subscription",
                url: "/posts",
                icon: icon6
            },
        ],
    },
    {
        id: 3,
        title: "general",
        listItems: [
            {
                id: 1,
                title: "Support & Help Center",
                url: "/",
                icon: icon7
            },
            {
                id: 2,
                title: "Backup & Recovery",
                url: "/",
                icon: icon8
            },
            {
                id: 3,
                title: "Account Settings",
                url: "/",
                icon: icon9
            },

        ],
    },

];