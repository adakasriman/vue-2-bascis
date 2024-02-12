new Vue({
    el: "#vue-app", // root element ID of page
    data: { // data object maintains State of the vue app
        name: "Sriman",
        job: "Frontend developer",
        vuejsWebside: "https://vuejs.org",
        adakasnGithubAccount: "<a href='https://github.com/adakasriman'>Gidhub</a>",
        count: 0,
        canvasXYValues: {
            x: 0,
            y: 0
        },
        formData: {
            userName: "",
            password: ""
        },
        twoWayDataBindingFormData: {
            userName: "",
            password: ""
        },
        computed: {
            a: 0,
            b: 0,
            age: 20
        },
        dynamicClassesVariables: {
            name1: true,
            name2: true,
        },
        composedClassesVariables: {
            name1: true,
            name2: true
        },
        condtionsState: {
            error: false,
            sucess: false
        },
        loopArray: [
            { id: 1, name: "sriman", age: 24 },
            { id: 2, name: "siva", age: 22 },
            { id: 3, name: "adaka", age: 26 },
        ],
        gameState: {
            health: 100,
            ended: false
        },
        reference: {
            input: ""
        }
    },
    methods: { // Methods 
        perseronalData: function (name) {
            return `Hi ${name}, job role is ${this.job}`;
        },
        countChange: function (type) {
            if (type == "add") {
                this.count++;
            } else if (type == "reset") {
                this.count = 0;
            } else {
                this.count--;
            }
        },
        updateXY: function (e) {
            // console.log(e);
            this.canvasXYValues.x = e.offsetX;
            this.canvasXYValues.y = e.offsetY;
        },
        click: function () {
            alert("you clicked me");
        },
        submithanduler: function () {
            console.log(this.formData);
        },
        logName: function (event) {
            const { name, value } = event.target;
            this.formData[name] = value;

        },
        // game methods
        punch: function () {
            this.gameState.health -= 10;

            if (this.gameState.health < 10) {
                this.gameState.ended = true;
            }
        },
        restart: function () {
            this.gameState.health = 100;
            this.gameState.ended = false;
        },
        referenceSubmitHandular: function () {
            console.log(this.$refs);

            this.reference.input = this.$refs.input.value;
            this.$refs.input.value = "";

            console.log(this.$refs.text.innerText);

        }

    },
    computed: {
        addTAgeA: function () {
            return this.computed.a + this.computed.age;
        },
        addTAgeB: function () {
            return this.computed.b + this.computed.age;

        },
        computClassToggle: function () {
            this.dynamicClassesVariables.name1 = !this.dynamicClassesVariables.name1;
            this.dynamicClassesVariables.name2 = !this.dynamicClassesVariables.name2;
        },
        computClassToggleExample2: function () {
            return {
                name1: this.composedClassesVariables.name1,
                name2: this.composedClassesVariables.name2
            }
        }
    }
});

