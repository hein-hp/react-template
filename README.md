# React 项目工程结构推荐

```
src/
├── components/          # 可复用UI组件（按功能/业务划分）
│   ├── common/          # 通用基础组件（与业务无关，可跨项目复用）
│   │   ├── Button/      # 按钮组件（含index.tsx、style.ts、Button.types.ts）
│   │   ├── Input/       # 输入框组件
│   │   └── Modal/       # 弹窗组件
│   ├── business/        # 业务相关组件（与具体业务绑定）
│   │   ├── UserCard/    # 用户信息卡片（依赖用户业务）
│   │   └── OrderList/   # 订单列表项组件
│   └── layout/          # 布局相关子组件（如侧边栏项、页头操作区）
│       ├── SidebarItem/
│       └── HeaderAction/

├── pages/               # 页面组件（对应路由，通常由components组合而成）
│   ├── Home/            # 首页
│   │   ├── index.tsx    # 页面入口
│   │   ├── components/  # 页面私有组件（仅当前页面使用，不复用）
│   │   └── hooks/       # 页面私有hooks（仅当前页面使用）
│   ├── User/            # 用户相关页面
│   │   ├── Login/       # 登录页
│   │   └── Profile/     # 个人中心页
│   └── Dashboard/       # 数据看板页

├── hooks/               # 自定义Hooks（按功能划分）
│   ├── useAuth.ts       # 权限相关hook（登录状态、角色判断）
│   ├── useRequest.ts    # 请求相关hook（封装axios，处理加载/错误状态）
│   └── useForm.ts       # 表单处理hook（封装表单验证、值管理）

├── utils/               # 工具函数（纯函数，无副作用）
│   ├── format/          # 格式化工具（日期、金额、字符串）
│   │   ├── date.ts      # 日期格式化（如formatDate('2023-10-01')）
│   │   └── money.ts     # 金额格式化（如formatMoney(1000) → "¥1,000.00"）
│   ├── storage.ts       # 本地存储工具（封装localStorage/sessionStorage，加解密）
│   ├── validator.ts     # 验证工具（手机号、邮箱、密码强度校验）
│   └── dom.ts           # DOM操作工具（获取元素、滚动控制等）

├── types/               # TypeScript类型定义（全局复用类型）
│   ├── api.ts           # 接口相关类型（请求参数、响应数据）
│   ├── component.ts     # 组件props类型（如ButtonProps、ModalProps）
│   ├── user.ts          # 用户相关类型（UserInfo、RoleType）
│   └── global.ts        # 全局类型扩展（如Window扩展、模块声明）

├── assets/              # 静态资源（编译时会被处理，路径需通过import引用）
│   ├── img/             # 图片资源（png/jpg/svg）
│   │   ├── logo.svg
│   │   └── bg-home.png
│   ├── fonts/           # 字体文件（ttf/woff）
│   │   └── iconfont.ttf
│   └── icons/           # 图标资源（通常为svg，可通过组件方式引入）
│       ├── MenuIcon.tsx
│       └── SearchIcon.tsx

├── styles/              # 全局样式（共享样式变量、混合、重置样式）
│   ├── reset.css        # 样式重置（统一浏览器默认样式）
│   ├── variables.scss   # 样式变量（主题色、字体大小、间距等）
│   ├── mixins.scss      # 样式混合（如flex布局、阴影效果）
│   └── global.scss      # 全局公共样式（body、html标签样式等）

├── router/              # 路由配置（基于react-router-dom）
│   ├── index.tsx        # 路由入口（配置Router、路由守卫、全局布局）
│   ├── routes.ts        # 路由规则定义（数组形式，包含path、component、权限等）
│   └── utils.ts         # 路由工具（如生成嵌套路由、跳转函数封装）

├── store/               # 状态管理（基于Redux Toolkit/Zustand等）
│   ├── index.ts         # 状态入口（导出store、Provider）
│   ├── slices/          # 状态切片（按模块划分）
│   │   ├── userSlice.ts # 用户状态（登录信息、权限）
│   │   └── themeSlice.ts # 主题状态（暗黑模式、主题色）
│   └── hooks.ts         # 状态hooks封装（如useAppSelector、useAppDispatch）

├── services/            # API请求服务（封装所有接口调用）
│   ├── request.ts       # 请求基础配置（axios实例、拦截器、错误处理）
│   ├── user.ts          # 用户相关接口（登录、注册、获取信息）
│   ├── goods.ts         # 商品相关接口（列表、详情、下单）
│   └── mock.ts          # 本地模拟数据（开发环境用，避免依赖后端）

├── constants/           # 常量定义（避免硬编码，统一维护）
│   ├── api.ts           # 接口地址常量（如API_BASE_URL、USER_LOGIN_URL）
│   ├── enum.ts          # 枚举常量（如OrderStatusEnum、RoleEnum）
│   └── config.ts        # 应用配置（如分页默认条数、超时时间）

├── context/             # React Context（轻量状态共享，替代部分store场景）
│   ├── ThemeContext.tsx # 主题上下文（提供主题切换能力）
│   └── AuthContext.tsx  # 权限上下文（简化局部权限控制）

├── __tests__/           # 测试文件（与业务代码对应，支持Jest+React Testing Library）
│   ├── components/      # 组件测试（如Button.test.tsx）
│   ├── hooks/           # Hooks测试（如useRequest.test.ts）
│   └── pages/           # 页面测试（如Login.test.tsx）

├── App.tsx              # 应用根组件（通常包含路由出口、全局Provider）
├── main.tsx             # 入口文件（渲染App到DOM，初始化全局配置）
├── index.css            # 入口样式（引入全局样式、主题样式）
├── vite-env.d.ts        # Vite类型声明（处理import.meta.env等Vite特有变量）
└── declaration.d.ts     # 自定义类型声明（如图片、CSS模块的类型扩展）
```