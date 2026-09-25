export type Role = "admin" | "operator" | "guest";

export type NavItem = {
  href: string;
  label: string;
  description: string;
  roles: Role[];
};

export const NAV_ITEMS: NavItem[] = [
  {
    href: "/rooms",
    label: "Помещения",
    description: "Список помещений и кабинетов. Данные появятся позже.",
    roles: ["admin", "operator", "guest"],
  },
  {
    href: "/tenants",
    label: "Арендаторы",
    description: "Сведения об арендаторах. Данные появятся позже.",
    roles: ["admin"],
  },
  {
    href: "/utilities",
    label: "Коммунальные",
    description: "Коммунальные платежи и показания. Данные появятся позже.",
    roles: ["admin", "operator"],
  },
  {
    href: "/staff",
    label: "Персонал",
    description: "Сотрудники и роли. Данные появятся позже.",
    roles: ["admin"],
  },
  {
    href: "/expenses",
    label: "Затраты",
    description: "Учёт расходов. Данные появятся позже.",
    roles: ["admin"],
  },
  {
    href: "/dashboard",
    label: "Сводка",
    description: "Общая картина по офисам. Данные появятся позже.",
    roles: ["admin", "operator"],
  },
];