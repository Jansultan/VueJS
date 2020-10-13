import VueRouter from 'vue-router'

import MainPage from '../components/main/MainPage'
import Layout from '../components/main/Layout'
import UserCard from '../components/UserCard'
import Pagination from '../components/pagination/Pagination'
import Search from '../components/search/Search'
import ProductList from '../components/product/ProductList'
import TextEditor from '../components/textEditor/TextEditor'
import ModalPage from '../components/modal/ModalPage'
import FormVuelidate from '../components/formVuelidate/FormVuelidate'



import NotFound from '../pages/404'

import AllFilmsPage from '../pages/AllFilmsPage'
import FilmPage from '../pages/FilmPage'
import FilmsLayout from '../pages/FilmsLayout'

export default new VueRouter({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'main',
            component: MainPage
        },
        {
            path: '/lessons',
            name: 'layout',
            component: Layout,
            children: [{
                    path: '',
                    name: 'lessons',
                    component: UserCard
                },
                {
                    path: '/pagination',
                    name: 'paginat',
                    component: Pagination
                },
                {
                    path: '/search',
                    name: 'search',
                    component: Search
                },
                {
                    path: '/product-list',
                    name: 'product-list',
                    component: ProductList
                },
                {
                    path: '/text-editor',
                    name: 'text-editor',
                    component: TextEditor
                },
                {
                    path: '/modal-page',
                    name: 'modal-page',
                    component: ModalPage
                },
                {
                    path: '/form-vuelidate',
                    name: 'form-vuelidate',
                    component: FormVuelidate
                },
                {
                    path: '*/*',
                    redirect: { name: 'lessons' }
                },

            ]
        },
        {
            path: '/films',
            name: 'layout',
            component: FilmsLayout,
            children: [{
                    path: '',
                    name: 'films',
                    component: AllFilmsPage
                },
                {
                    path: ':id',
                    name: 'filmPage',
                    component: FilmPage,
                    beforeEnter: (to, from, next) => {
                        if (localStorage.getItem('auth')) {
                            next()
                        } else {
                            next({ name: 'films' })
                        }
                    }
                }
            ]
        },
        {
            path: '*',
            name: 'notfound',
            component: NotFound
        }
    ]
})