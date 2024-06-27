<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';

    const users = ref([]);

    const getUsers = () => {
        axios.get('/api/users')
        .then((response) => {
            // console.log(response.data);
            users.value = response.data;
        })
    }

    onMounted(() => {
        getUsers();
    });

</script>
<!-- <script>
    import axios from 'axios';
    import { ref, onMounted } from 'vue';

    export default {
        name: 'UserList',
        data() {
            return {
            users: [],
            };
        },
        mounted() {
            this.getUsers();
        },
        methods: {
            getUsers() {
            axios.get('/api/users')
                .then((response) => {
                    this.users = response.data;
                })
                .catch((error) => {
                    console.error(error);
                });
            },
        },
    };
</script> -->
<template>
    <!-- Content Header (Page header) -->
    <div class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1 class="m-0">User</h1>
                </div><!-- /.col -->
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                        <li class="breadcrumb-item active">User</li>
                    </ol>
                </div><!-- /.col -->
            </div><!-- /.row -->
        </div><!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->

    <!-- Main content -->
    <div class="content">
        <div class="container-fluid">
            <div class="container-fluid">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">DataTable with minimal features & hover style</h3>
                    </div>
                    <div class="card-body">
                        <table id="example2" class="table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(user, index) in users" :key="index" v-if="users.length > 0">
                                    <td>{{ index + 1 }}</td>
                                    <td>{{ user.name }}</td>
                                    <td>{{ user.email }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <!-- /.card-body -->
                </div>
            </div>
        </div>
    </div><!-- /.container-fluid -->
    <!-- /.content -->

</template>

