<template>
    <body>
    <div class="wrapper">
        <v-form>
        <div id="wizard">
                <!-- SECTION 1 -->
                <h4></h4>
                <section>
                    <div class="form-header">
                        <div class="avartar">
                            <a href="#">
                                <img src="../assets/images/avartar.png" alt="">
                            </a>
                            <div class="avartar-picker">
                                <input type="file" name="file-1[]" id="file-1" class="inputfile"
                                       data-multiple-caption="{count} files selected" multiple/>
                                <label for="file-1">
                                    <i class="zmdi zmdi-camera"></i>
                                    <span>Choose a Logo</span>
                                </label>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="form-holder active">
                                <input type="text" placeholder="First Name" class="form-control" v-model="formData.firstName">
                            </div>
                            <div class="form-holder">
                                <input type="text" placeholder="Last Name" class="form-control" v-model="formData.lastName">
                            </div>
                        </div>
                    </div>
                    <div class="form-holder">
                        <input type="text" placeholder="Email" class="form-control" v-model="formData.email">
                    </div>
                    <div class="form-holder">
                        <input type="password" placeholder="Create a password" class="form-control" v-model="formData.password">
                    </div>
                </section>

                <!-- SECTION 2 -->
                <h4></h4>
                <section>
                    <h6> Tell us about your website</h6>
                    <br>
                    <div class="form-holder">
                        <input type="text" placeholder="Name of the Website" class="form-control" v-model="formData.websiteName">
                    </div>
                    <div class="form-holder">
                        <input type="text" placeholder="Description of the Website" class="form-control"
                               v-model="formData.description">
                    </div>
                    <div class="form-holder">
                        <input type="text" placeholder="Tagline" class="form-control" v-model="formData.tagLine">
                    </div>
                    <div class="form-holder">
                        <input type="text" placeholder="Description of Tag Line" class="form-control"
                               v-model="formData.descriptionOfTagLine">
                    </div>
                    <div class="form-holder">
                        <input type="text" placeholder="Services" class="form-control" v-model="formData.services">
                    </div>
                </section>

                <h4></h4>
                <section>
                    <h6> Tell us about your website</h6>
                    <br>
                    <div class="form-holder">
                        <input type="text" placeholder="Location" class="form-control" v-model="formData.companyLocation">
                    </div>
                    <div class="form-holder">
                        <input type="text" placeholder="Phone Number" class="form-control" v-model="formData.phoneNumber">
                    </div>
                    <div class="form-holder">
                        <input type="text" placeholder="Email for Contact Us Page" class="form-control"
                               v-model="formData.emailContactUs">
                    </div>
                    <div class="form-holder">
                        <input type="text" placeholder="Facebook Link" class="form-control" v-model="formData.twitterLink">
                    </div>
                    <div class="form-holder">
                        <input type="text" placeholder="Instagram Link" class="form-control" v-model="formData.instagramLink">
                    </div>
                </section>

                <!-- SECTION 2 -->
                <h4></h4>
                <section>
                    <div class="grid">
                        <div class="row">
                            <div class="mt-1">
                                <input type="file" name="file-1[]" id="file-2" class="inputfile"
                                       data-multiple-caption="{count} files selected" multiple/>
                                <label for="file-1">
                                    <i class="zmdi zmdi-camera"></i>
                                    <span> Choose an Image</span>
                                </label>
                            </div>
                            <div class="mt-1">
                                <input type="file" name="file-1[]" id="file-3" class="inputfile"
                                       data-multiple-caption="{count} files selected" multiple/>
                                <label for="file-1">
                                    <i class="zmdi zmdi-camera"></i>
                                    <span> Choose an Image</span>
                                </label>
                            </div>
                            <div class="mt-1">
                                <input type="file" name="file-1[]" id="file-4" class="inputfile"
                                       data-multiple-caption="{count} files selected" multiple/>
                                <label for="file-1">
                                    <i class="zmdi zmdi-camera"></i>
                                    <span> Choose an Image</span>
                                </label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="mt-1">
                                <input type="file" name="file-1[]" id="file-5" class="inputfile"
                                       data-multiple-caption="{count} files selected" multiple/>
                                <label for="file-1">
                                    <i class="zmdi zmdi-camera"></i>
                                    <span> Choose an Image</span>
                                </label>
                            </div>
                            <div class="mt-1">
                                <input type="file" name="file-1[]" id="file-6" class="inputfile"
                                       data-multiple-caption="{count} files selected" multiple/>
                                <label for="file-1">
                                    <i class="zmdi zmdi-camera"></i>
                                    <span> Choose an Image</span>
                                </label>
                            </div>
                            <div class="mt-1">
                                <input type="file" name="file-1[]" id="file-7" class="inputfile"
                                       data-multiple-caption="{count} files selected" multiple/>
                                <label for="file-1">
                                    <i class="zmdi zmdi-camera"></i>
                                    <span> Choose an Image</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- SECTION 3 -->
                <h4></h4>
                <section>
                    <h5>Choose a Theme </h5>
                    // plot all images according to form and uploaded images
                </section>
            </div>
        </v-form>
    </div>
    </body>
</template>
<script>
    import { createApp } from 'vue';
    import '../assets/js/jquery-3.3.1.min'
    import '../assets/js/jquery.steps'
    import '../assets/js/main'
    import axios from 'axios'
    import { url } from '../client_config/config';


    export default {
        data() {
            return {
                formData: {
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: '',
                    websiteName: '',
                    description: '',
                    tagLine: '',
                    descriptionOfTagLine: '',
                    services: '',
                    companyLocation: '',
                    phoneNumber: '',
                    emailContactUs: '',
                    twitterLink: '',
                    instagramLink: '',
                }
            }
        },


        methods: {
           async buildWebsite() {
                const payload = {
                    FirstName: this.formData.firstName,
                    LastName: this.formData.lastName,
                    Email: this.formData.email,
                    Password: this.formData.password,
                    WebsiteName: this.formData.websiteName,
                    WebsiteDescription: this.formData.description,
                    TagLine: this.formData.tagLine,
                    TagLineDescription: this.formData.descriptionOfTagLine,
                    Services: this.formData.services,
                    Location: this.formData.companyLocation,
                    PhoneNumber: this.formData.phoneNumber,
                    EmailContactUs: this.formData.emailContactUs,
                    TwitterLink: this.formData.twitterLink,
                    InstagramLink: this.formData.instagramLink,
                };

                axios.post(`${url}/websites/build`, payload).then(response => {

                    console.log({payload});

                    if (response.status === 400) {
                        response.json().then(function(data) {
                            alert("savedddd")
                        });
                    }
                    this.msg=true;
                    this.text="website is building.";
                });
            },

            onStepChanging(event, currentIndex, newIndex, formData) {
                if (newIndex >= 1) {
                    $('.actions ul').addClass('actions-next');
                } else {
                    $('.actions ul').removeClass('actions-next');
                }

                if (formData && typeof currentIndex === 'number') {
                    this.formData[currentIndex] = $('form').serializeArray();
                }

                return true;
            },
        },

        mounted() {
            let vm = this;
            $(document).on('finished', function (event) {
                console.log({mountedForm: vm.formData});
                vm.buildWebsite();
            });
        },
    }
</script>

<style>
    @import '../assets/home.css';
    @import '../assets/fonts/material-design-iconic-font/css/material-design-iconic-font.css';
</style>
