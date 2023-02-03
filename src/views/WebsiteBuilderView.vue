<template>
    <div v-if="!generatingWebsite">
        <Wizard
                squared-tabs
                card-background
                navigable-tabs
                scrollable-tabs
                :nextButton="nextButtonConfig"
                :custom-tabs="customTabsConfig"
                :beforeChange="onTabBeforeChange"
                @change="onChangeCurrentTab"
                @complete:wizard="wizardCompleted"
        >
            <div class="row justify-content-center my-5">
                <div class="col-md-6 text-center">
                    <h2>Tell Us About Your Website</h2>
                </div>
            </div>

            <h5 v-if="currentTabIndex === 0">
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
                                <input type="text" placeholder="Owner First Name" class="form-control"
                                       v-model="formData.firstName">
                            </div>
                            <div class="form-holder">
                                <input type="text" placeholder="Owner Last Name" class="form-control"
                                       v-model="formData.lastName">
                            </div>
                            <div class="form-holder">
                                <input type="text" placeholder="Owner Email" class="form-control" v-model="formData.email">
                            </div>
                            <div class="form-holder">
                                <input type="password" placeholder="Create a password" class="form-control"
                                       v-model="formData.password">
                            </div>
                        </div>
                    </div>
                </section>
            </h5>
            <h5 v-if="currentTabIndex === 1">
                <h4></h4>
                <section>
<!--                    <h6> Tell us about your website</h6>-->
<!--                    <br>-->
                    <div class="form-holder">
                        <input type="text" placeholder="Name of the Website" class="form-control"
                               v-model="formData.websiteName">
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
            </h5>
            <h5 v-if="currentTabIndex === 2">
                <h4></h4>
                <section>
<!--                    <h6> Tell us about your website</h6>-->
<!--                    <br>-->
                    <div class="form-holder">
                        <input type="text" placeholder="Location" class="form-control"
                               v-model="formData.companyLocation">
                    </div>
                    <div class="form-holder">
                        <input type="text" placeholder="Phone Number" class="form-control"
                               v-model="formData.phoneNumber">
                    </div>
                    <div class="form-holder">
                        <input type="text" placeholder="Email for Contact Us Page" class="form-control"
                               v-model="formData.emailContactUs">
                    </div>
                    <div class="form-holder">
                        <input type="text" placeholder="Facebook Link" class="form-control"
                               v-model="formData.twitterLink">
                    </div>
                    <div class="form-holder">
                        <input type="text" placeholder="Instagram Link" class="form-control"
                               v-model="formData.instagramLink">
                    </div>
                </section>
            </h5>
            <h5 v-if="currentTabIndex === 3">
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
            </h5>
            <h5 v-if="currentTabIndex === 4">
                <h4></h4>
                <div>
                    <div v-html="htmlContent"></div>
                </div>
            </h5>
        </Wizard>
    </div>

    <div class="col-sm-12 text-center" v-if="generatingWebsite">
        <h1 class="text-success mt-5">Generating your website. Please wait...</h1>
    </div>
</template>

<script>
    import 'form-wizard-vue3/dist/form-wizard-vue3.css';
    import Wizard from 'form-wizard-vue3';
    import axios from 'axios'
    import {url} from '../client_config/config';
    import '../assets/js/jquery-3.3.1.min';
    import '../assets/js/jquery.steps';
    import '../assets/js/main';

    export default {
        name: 'App',
        components: {
            Wizard,
        },
        data() {
            return {
                generatingWebsite: false,
                currentTabIndex: 0,
                nextButtonConfig: {
                    text: 'Next',
                    icon: 'check',
                    hideIcon: true, // default false but selected for sample
                    hideText: false, // default false but selected for sample
                },
                customTabsConfig: [
                    {
                        title: 'Personal Information',
                    },
                    {
                        title: 'Website Information',
                    },
                    {
                        title: 'Additional Website Information',
                    },
                    {
                        title: 'Upload Photos',
                    },
                    {
                        title: 'Choose A Theme',
                    },
                ],
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
                },
                htmlContent: ''
            };
        },
        methods: {
            onChangeCurrentTab(index, oldIndex) {
                console.log(index, oldIndex);
                this.currentTabIndex = index;
            },

            onTabBeforeChange() {
                if (this.currentTabIndex === 0) {
                    console.log('First Tab');
                }
                console.log('All Tabs');
            },

            wizardCompleted() {
                console.log('Wizard Completed');
                this.buildWebsite();
            },

            buildWebsite() {
                this.generatingWebsite = true;
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

                console.log({payload});

                axios.post(`${url}/websites/build`, payload).then(response => {
                    console.log({response: response.data});

                    if (response.data.link) {
                        setTimeout(() => {
                            this.generatingWebsite = false;
                            window.open(response.data.link, '_blank');
                        }, 3000);
                    }
                });
            },
        },
    };
</script>

<style>
    @import '../assets/home.css';
    @import '../assets/fonts/material-design-iconic-font/css/material-design-iconic-font.css';

    body {
        margin: 100px;
    }
</style>
