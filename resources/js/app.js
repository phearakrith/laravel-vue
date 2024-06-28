import './bootstrap';

// <!-- jQuery -->
// import 'admin-lte/plugins/jquery/jquery.min.js';

// <!-- Bootstrap 4 -->
import 'admin-lte/plugins/bootstrap/js/bootstrap.bundle.min.js';

// <!-- SweetAlert2 -->
import 'admin-lte/plugins/sweetalert2/sweetalert2.min.js';

// <!-- Toastr -->
import 'admin-lte/plugins/toastr/toastr.min.js';

// <!-- DataTables & Plugins -->
import 'admin-lte/plugins/datatables/jquery.dataTables.min.js';
import 'admin-lte/plugins/datatables-bs4/js/dataTables.bootstrap4.min.js';
import 'admin-lte/plugins/datatables-responsive/js/dataTables.responsive.min.js';
import 'admin-lte/plugins/datatables-responsive/js/responsive.bootstrap4.min.js';
import 'admin-lte/plugins/datatables-buttons/js/dataTables.buttons.min.js';
import 'admin-lte/plugins/datatables-buttons/js/buttons.bootstrap4.min.js';
import 'admin-lte/plugins/jszip/jszip.min.js';
import 'admin-lte/plugins/pdfmake/pdfmake.min.js';
import 'admin-lte/plugins/pdfmake/vfs_fonts.js';
import 'admin-lte/plugins/datatables-buttons/js/buttons.html5.min.js';
import 'admin-lte/plugins/datatables-buttons/js/buttons.print.min.js';
import 'admin-lte/plugins/datatables-buttons/js/buttons.colVis.min.js';

// <!-- jquery-validation -->
import 'admin-lte/plugins/jquery-validation/jquery.validate.min.js';
import 'admin-lte/plugins/jquery-validation/additional-methods.min.js';

// <!-- AdminLTE App -->
import 'admin-lte/dist/js/adminlte.min.js';

// import { createApp } from 'vue';
import { createApp } from 'vue/dist/vue.esm-bundler.js';
import { createRouter, createWebHistory } from 'vue-router';
import Routes from './routes.js';

const app = createApp({});

const router = createRouter({
    routes: Routes,
    history: createWebHistory(),
});

app.use(router);

app.mount('#app');
