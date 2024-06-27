<script setup>
import axios from 'axios';
import { ref, onMounted, reactive } from 'vue';

    const users = ref([]);

    const form = reactive({
        name: '',
        email: '',
        password: '',
    });

    const getUsers = () => {
        axios.get('/api/users')
        .then((response) => {
            // console.log(response.data);
            users.value = response.data;
        });
    }

    const createUser = () => {
        axios.post('/api/users', form)
        .then((response) => {
            users.value.unshift(response.data);
            form.name = '';
            form.email = '';
            form.password = '';
            $('#createUserModal').modal('hide');
        });
    }

    onMounted(() => {
        getUsers();
    });

</script>

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
                <button type="button" class="btn btn-primary mb-2" data-toggle="modal" data-target="#createUserModal">
                    Add New User
                </button>
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
                                    <th>Create_At</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(user, index) in users" :key="index" v-if="users.length > 0">
                                    <td>{{ index + 1 }}</td>
                                    <td>{{ user.name }}</td>
                                    <td>{{ user.email }}</td>
                                    <td>{{ user.created_at }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <!-- /.card-body -->
                </div>
            </div>
        </div>
    </div><!-- /.container-fluid -->

    <div class="modal fade" id="createUserModal" data-backdrop="static" tabindex="-1" role="dialog"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">
                        <!-- <span v-if="editing">Edit User</span>
                        <span v-else>Add New User</span> -->
                        <span>Add New User</span>
                    </h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <!-- <Form ref="form" @submit="handleSubmit" :validation-schema="editing ? editUserSchema : createUserSchema"
                    v-slot="{ errors }" :initial-values="formValues"> -->
                <form autocomplete="off">
                    <div class="modal-body">
                        <div class="form-group">
                            <label for="name">Name</label>
                            <!-- <Field name="name" type="text" class="form-control" :class="{ 'is-invalid': errors.name }"
                                id="name" aria-describedby="nameHelp" placeholder="Enter full name" />
                            <span class="invalid-feedback">{{ errors.name }}</span> -->
                            <input v-model="form.name" name="name" type="text" class="form-control" id="name" aria-describedby="nameHelp" placeholder="Enter full name" />
                        </div>

                        <div class="form-group">
                            <label for="email">Email</label>
                            <!-- <Field name="email" type="email" class="form-control "
                                :class="{ 'is-invalid': errors.email }" id="email" aria-describedby="nameHelp"
                                placeholder="Enter full name" />
                            <span class="invalid-feedback">{{ errors.email }}</span> -->
                            <input v-model="form.email" name="email" type="email" class="form-control " id="email" aria-describedby="nameHelp" placeholder="Enter full name" />
                        </div>

                        <div class="form-group">
                            <label for="email">Password</label>
                            <!-- <Field name="password" type="password" class="form-control "
                                :class="{ 'is-invalid': errors.password }" id="password" aria-describedby="nameHelp"
                                placeholder="Enter password" />
                            <span class="invalid-feedback">{{ errors.password }}</span> -->
                            <input v-model="form.password" name="password" type="password" class="form-control " id="password" aria-describedby="nameHelp" placeholder="Enter password" />
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                        <button @click="createUser" type="submit" class="btn btn-primary">Save</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

