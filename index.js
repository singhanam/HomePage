var base_url = "https://landsandhomes.com";
        $(function() {
            $.ajaxSetup({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')
                },
                isLocal: false
            });
        });
   
    // <!-- end common js -->

       
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDiovKOIcqwYzIh-Ih3faAcm_T4iL8T66c&libraries=places">
  
        $(document).ready(function() {
            $('.buy_propss').click();
            $(".buy_propss").addClass("active");
        });
        $(document).on("click", '.propertyType', function(event) {
            var id = $(this).data('value');
            $('#prop_type_value').val(id);
            var url = "https://landsandhomes.com/ajax/category?id=" + id;
            $.ajax({
                type: 'GET',
                url: url,
                data: $(this).serialize(),
                success: function(data) {
                    console.log(data.html);
                    $('#advance_design_filter').html(data.html);

                }
            });
        });
        $(document).on("change", '.sub_property_type_id', function(event) {
            var sub_type_id = $(this).val();

            var id = $('#prop_type_value').val();
            var url = "https://landsandhomes.com/ajax/category?id=" + id + "&sub_type_id=" + sub_type_id + '&only_category=yes';
            $.ajax({
                type: 'GET',
                url: url,
                data: $(this).serialize(),
                success: function(data) {
                    $('#advance_design_category').html(data.html);
                }
            });
        });
   
        $(document).ready(function() {
            $('.buy_propss').click();
            $(".buy_propss").addClass("active");
        });


    
        $('.close').click(function() {
            $('.alert-dismissible').hide();
        });
        $(document).ready(function() {
            $(".btn-group-toggle label").on("click", function() {
                $(this).addClass("active").siblings().removeClass("active");
            });
        });
        $(document).on('click', 'input[type="radio"][name="category"]', function() {
            if ($(this).is(':checked')) {
                $(this).closest('label').addClass('active').siblings().removeClass('active');
            }
        });
        $(document).on('click', 'input[type="radio"]', function() {
            if ($(this).is(':checked')) {
                $(this).closest('label').addClass('active').siblings().removeClass('active');
            }
        });
        $(document).on('click', 'input[type="checkbox"]', function() {
            if ($(this).is(':checked')) {
                $(this).closest('label').addClass('active');
            } else {
                $(this).closest('label').removeClass('active');
            }
        });
   
        // Add this to your JavaScript file
        var myModal = new bootstrap.Modal(document.getElementById('page-load-modal'));
        myModal.show();
        // Add an event listener to the close button
        var closeButton = document.querySelector('#page-load-modal .close');
        closeButton.addEventListener('click', function() {
            myModal.hide();
        });
   
        $(document).ready(function() {
            $('#loadAll').click(function() {
                $('#list li').addClass('visible');
                $('#loadAll').hide();
            });
        });
        $("#single").select2({
            placeholder: "City",
            allowClear: true
        });
        $('option[value=""]').attr("disabled", "disabled");
   
        var categoryBtn = document.getElementById('category_home');
        var filterBtn = document.querySelector('.filter');
        var categoryDropdown = document.getElementById('category');
        var filterDropdown = document.getElementById('filter');
        categoryBtn.addEventListener('click', function() {
            categoryDropdown.classList.toggle('show');
            if (filterDropdown.classList.contains('show')) {
                filterDropdown.classList.remove('show');
            }
        });
        filterBtn.addEventListener('click', function() {
            filterDropdown.classList.toggle('show');
            if (categoryDropdown.classList.contains('show')) {
                categoryDropdown.classList.remove('show');
            }
        });
        document.addEventListener('click', function(e) {
            if (!categoryDropdown.contains(e.target)) {
                categoryDropdown.classList.remove('show');
            }
            if (!filterDropdown.contains(e.target)) {
                filterDropdown.classList.remove('show');
            }
        });
   
        $(document).ready(function() {
            $('.properties_list').slick({
                infinite: false,
                slidesToShow: 4,
                slidesToScroll: 4,
                responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        // centerMode: true,
                    }
                }, {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                    }
                }, {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        infinite: true,
                    }
                }, {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        autoplay: true,
                        autoplaySpeed: 2000,
                    }
                }]
            });
        });
   
        $(document).ready(function() {
            $('.projects_list').slick({
                infinite: false,
                slidesToShow: 5,
                slidesToScroll: 5,
                responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        // centerMode: true,
                    }
                }, {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                    }
                }, {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        infinite: true,
                    }
                }, {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        autoplay: true,
                        autoplaySpeed: 2000,
                    }
                }]
            });
  
        $(document).ready(function(e) {
            $('#mnu-category').find('a').click(function(e) {
                e.preventDefault();
                var cat = $(this).text();
                $('#srch-category').text(cat);
                $('#txt-category').val(cat);
            });
        });
   
        const input1 = document.querySelector('#input1');
        const list1 = document.querySelector('#list1');
        const list2 = document.querySelector('#list2');
        const ranges = [{
                min: 1000000,
                max: 2500000
            },
            {
                min: 2500000,
                max: 5000000
            },
            {
                min: 5000000,
                max: 7500000
            },
            {
                min: 7500000,
                max: 10000000
            },
            {
                min: 10000000,
                max: 30000000
            },
            {
                min: 30000000,
                max: 50000000
            },
            {
                min: 50000000,
                max: Infinity
            }
        ];
        const generateOptions = (startValue) => {
            const options = [];
            const len = ranges.length;
            let addedOneCrOption = false;
            ranges.forEach(range => {
                if (startValue < range.min) {
                    options.push(`<li value="${range.min}">${range.min}</li>`);
                    if (range.max === Infinity && !addedOneCrOption) {
                        options.push(`<li value="5 cr +">5 cr +</li>`);
                        addedOneCrOption = true;
                    }
                } else if (startValue >= range.min && startValue < range.max) {
                    if (range.max === Infinity && !addedOneCrOption) {
                        options.push(`<li value="5 cr +">5 cr +</li>`);
                        addedOneCrOption = true;
                    }
                }
            });
            return options.join('');
        };
        const inputs = document.querySelectorAll(".input");
        inputs.forEach((input) => {
            const list = input.nextElementSibling;
            list.style.display = "none";
            input.addEventListener("click", function() {
                list.style.display = list.style.display === "none" ? "block" : "none";
            });
            list.addEventListener("click", function(event) {
                const target = event.target;
                const ulTag = target.closest("ul");
                const id = ulTag.getAttribute("id");
                const item = target.closest("li");
                if (item && list.contains(item)) {
                    input.value = item.getAttribute("value");
                    list.style.display = "none";
                    event.stopPropagation(); // stop event propagation
                }
                if (id === "list1") {
                    const selectedValue = Number(input1.value);
                    const options = generateOptions(selectedValue, ranges);
                    list2.innerHTML = options;
                    list2.style.display = "block";
                }
            });
        });
  
        function checkValue(element) {
            // check if the input has any value (if we've typed into it)
            if ($(element).val())
                $(element).addClass('has-value');
            else
                $(element).removeClass('has-value');
        }
        $(document).ready(function() {
            // Run on page load
            $('.form-control').each(function() {
                checkValue(this);
            })
            // Run on input exit
            $('.form-control').blur(function() {
                checkValue(this);
            });
        });
   
        $(document).ready(function() {
            $(".otp").on("keyup", function() {
                if ($(this).val().length > 0) {
                    // Enable the next input box if the current input box has a value
                    $(this).next(".otp").prop("disabled", false).focus();
                } else {
                    // Disable the next input box if the current input box is empty
                    $(this).next(".otp").prop("disabled", true);
                }
            });
        });
   



    // <!--update-profile-->
   
        function readURL(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();
                reader.onload = function(e) {
                    $('#imagePreview').css('background-image', 'url(' + e.target.result + ')');
                    $('#imagePreview').hide();
                    $('#imagePreview').fadeIn(650);
                }
                reader.readAsDataURL(input.files[0]);
            }
        }
        $("#imageUpload").change(function() {
            readURL(this);
        });
   
    // <!--sticky-form-->

    
        $(function() {
            var top = $('#sidebar').offset().top - parseFloat($('#sidebar').css('marginTop').replace(/auto/, 0));
            var footTop = $('#footer').offset().top - parseFloat($('#footer').css('marginTop').replace(/auto/, 0));
            var maxY = footTop - $('#sidebar').outerHeight();
            $(window).scroll(function(evt) {
                var y = $(this).scrollTop();
                if (y > top) {
                    //Quand scroll, ajoute une classe ".fixed" et supprime le Css existant
                    if (y < maxY) {
                        $('#sidebar').addClass('fixed').removeAttr('style');
                    } else {
                        //Quand la sidebar arrive au footer, supprime la classe "fixed" précèdement ajouté
                        $('#sidebar').removeClass('fixed').css({
                            position: 'static',
                            top: (maxY - top) + 'px'
                        });
                    }
                } else {
                    $('#sidebar').removeClass('fixed');
                }
            });
        });
    

    // <!--compare-page-select-button-->
    
        $(document).ready(function() {
            $("#image-dropdown").change(function() {
                // get the selected image from the selected option value
                var selectedImage = $(this).val();
                // update the image source
                $("#selected-image").attr("src", selectedImage);
            });
        });
    
        // Get the first dropdown toggle button
        const dropdownToggle1 = document.getElementById("dropdownMenuButton1");
        // Get all the checkboxes in the first dropdown
        const checkboxes1 = document.querySelectorAll(".flat_type");
        // Add an event listener to each checkbox in the first dropdown
        checkboxes1.forEach((checkbox) => {
            checkbox.addEventListener("click", () => {
                // Check if any of the checkboxes in the first dropdown are selected
                const checked = document.querySelectorAll(".flat_type:checked");
                // Change the color of the dropdown toggle button for the first dropdown
                if (checked.length > 0) {
                    dropdownToggle1.style.backgroundColor = "#ffe8e8";
                    dropdownToggle1.style.borderColor = "#EC1B26";
                    dropdownToggle1.style.color = "#EC1B26"; // Change to your desired color
                } else {
                    dropdownToggle1.style.backgroundColor = "";
                    dropdownToggle1.style.borderColor = "";
                    dropdownToggle1.style.color = ""; // Change back to its original color
                }
            });
        });
        const dropdownToggle2 = document.getElementById("dropdownMenuButton2");
        const checkboxes2 = document.querySelectorAll(".kind_of_property");
        checkboxes2.forEach((checkbox) => {
            checkbox.addEventListener("click", () => {
                const checked = document.querySelectorAll(".kind_of_property:checked");
                if (checked.length > 0) {
                    dropdownToggle2.style.backgroundColor = "#ffe8e8";
                    dropdownToggle2.style.borderColor = "#EC1B26";
                    dropdownToggle2.style.color = "#EC1B26"; // Change to your desired color
                } else {
                    dropdownToggle2.style.backgroundColor = "";
                    dropdownToggle2.style.borderColor = "";
                    dropdownToggle2.style.color = ""; // Change back to its original color
                }
            });
        });

        const dropdownToggle4 = document.getElementById("dropdownMenuButton4");
        const checkboxes4 = document.querySelectorAll(".possession_status");
        checkboxes4.forEach((checkbox) => {
            checkbox.addEventListener("click", () => {
                const checked = document.querySelectorAll(".possession_status:checked");
                if (checked.length > 0) {
                    dropdownToggle4.style.backgroundColor = "#ffe8e8";
                    dropdownToggle4.style.borderColor = "#EC1B26";
                    dropdownToggle4.style.color = "#EC1B26"; // Change to your desired color
                } else {
                    dropdownToggle4.style.backgroundColor = "";
                    dropdownToggle4.style.borderColor = "";
                    dropdownToggle4.style.color = ""; // Change back to its original color
                }
            });
        });
        const dropdownToggle5 = document.getElementById("dropdownMenuButton5");
        const checkboxes5 = document.querySelectorAll(".postedby");
        checkboxes5.forEach((checkbox) => {
            checkbox.addEventListener("click", () => {
                const checked = document.querySelectorAll(".postedby:checked");
                if (checked.length > 0) {
                    dropdownToggle5.style.backgroundColor = "#ffe8e8";
                    dropdownToggle5.style.borderColor = "#EC1B26";
                    dropdownToggle5.style.color = "#EC1B26"; // Change to your desired color
                } else {
                    dropdownToggle5.style.backgroundColor = "";
                    dropdownToggle5.style.borderColor = "";
                    dropdownToggle5.style.color = ""; // Change back to its original color
                }
            });
        });
        const dropdownToggle6 = document.getElementById("dropdownMenuButton6");
        const checkboxes6 = document.querySelectorAll(".morefilter");
        checkboxes6.forEach((checkbox) => {
            checkbox.addEventListener("click", () => {
                const checked = document.querySelectorAll(".morefilter:checked");
                if (checked.length > 0) {
                    dropdownToggle6.style.backgroundColor = "#ffe8e8";
                    dropdownToggle6.style.borderColor = "#EC1B26";
                    dropdownToggle6.style.color = "#EC1B26"; // Change to your desired color
                } else {
                    dropdownToggle6.style.backgroundColor = "";
                    dropdownToggle6.style.borderColor = "";
                    dropdownToggle6.style.color = ""; // Change back to its original color
                }
            });
        });

        const dropdownToggle8 = document.getElementById("dropdownMenuButton8");
        const checkboxes8 = document.querySelectorAll(".dropdown_area");
        checkboxes8.forEach((checkbox) => {
            checkbox.addEventListener("click", () => {
                const checked = document.querySelectorAll(".dropdown_area:checked");
                if (checked.length > 0) {
                    dropdownToggle8.style.backgroundColor = "#ffe8e8";
                    dropdownToggle8.style.borderColor = "#EC1B26";
                    dropdownToggle8.style.color = "#EC1B26"; // Change to your desired color
                } else {
                    dropdownToggle8.style.backgroundColor = "";
                    dropdownToggle8.style.borderColor = "";
                    dropdownToggle8.style.color = ""; // Change back to its original color
                }
            });
        });
   
        const dropdownToggle3 = document.getElementById("dropdownMenuButton3");
        const budgetList = document.getElementById("list1");
        // Add an event listener to the budget list
        budgetList.addEventListener("click", (event) => {
            // Check if a list item is clicked
            const listItem = event.target.closest("li");
            if (!listItem) {
                return;
            }
            // Get the value of the selected list item
            const value = parseInt(listItem.getAttribute("value"));
            if (isNaN(value)) {
                return;
            }
            // Change the background color of the dropdown toggle
            dropdownToggle3.style.backgroundColor = "#ffe8e8";
            dropdownToggle3.style.borderColor = "#EC1B26";
            dropdownToggle3.style.color = "#EC1B26"; // Change to your desired color
        });
        // Add an event listener to the budget input to clear the background color when the input is cleared
        budgetInput.addEventListener(".input", () => {
            // Check if the input value is valid
            const value = parseInt(budgetInput.value);
            if (isNaN(value)) {
                return;
            }
            // Check if the input value is within the range of the list items
            const listItems = budgetList.querySelectorAll("li");
            let isInRange = false;
            for (let i = 0; i < listItems.length; i++) {
                const listItemValue = parseInt(listItems[i].getAttribute("value"));
                if (value >= listItemValue) {
                    isInRange = true;
                    break;
                }
            }
            // Clear the background color of the dropdown toggle if the input value is not within range
            if (!isInRange) {
                dropdownToggle3.style.backgroundColor = "";
                dropdownToggle3.style.borderColor = "";
                dropdownToggle3.style.color = ""; // Change back to its original color
            }
        });
    
        $(document).ready(function() {

            //For Card Number formatted input
            var cardNum = document.getElementById('cr_no');
            cardNum.onkeyup = function(e) {
                if (this.value == this.lastValue) return;
                var caretPosition = this.selectionStart;
                var sanitizedValue = this.value.replace(/[^0-9]/gi, '');
                var parts = [];

                for (var i = 0, len = sanitizedValue.length; i < len; i += 4) {
                    parts.push(sanitizedValue.substring(i, i + 4));
                }

                for (var i = caretPosition - 1; i >= 0; i--) {
                    var c = this.value[i];
                    if (c < '0' || c > '9') {
                        caretPosition--;
                    }
                }
                caretPosition += Math.floor(caretPosition / 4);

                this.value = this.lastValue = parts.join('-');
                this.selectionStart = this.selectionEnd = caretPosition;
            }

            //For Date formatted input
            var expDate = document.getElementById('exp');
            expDate.onkeyup = function(e) {
                if (this.value == this.lastValue) return;
                var caretPosition = this.selectionStart;
                var sanitizedValue = this.value.replace(/[^0-9]/gi, '');
                var parts = [];

                for (var i = 0, len = sanitizedValue.length; i < len; i += 2) {
                    parts.push(sanitizedValue.substring(i, i + 2));
                }

                for (var i = caretPosition - 1; i >= 0; i--) {
                    var c = this.value[i];
                    if (c < '0' || c > '9') {
                        caretPosition--;
                    }
                }
                caretPosition += Math.floor(caretPosition / 2);

                this.value = this.lastValue = parts.join('/');
                this.selectionStart = this.selectionEnd = caretPosition;
            }



        })
    
        $(document).on("click", function(e) {
            if ($(e.target).closest(".tab-pane.active,.nav-link1").length === 0) {
                $(".tab-pane.active").hide();
                $('.nav-link1').removeClass('active');
            }
        });
    
        $('.categories_tab input[type="checkbox"]').click(function() {
            var label = $(this).siblings('label');
            if ($(this).prop('checked')) {
                label.addClass('checked');
            } else {
                label.removeClass('checked');
            }
        });
    });
