export type NavItem = {
    path: string;
    label: string;
    component: React.ComponentType;
    inMenu: boolean;
};

export type NavItems = NavItem[];