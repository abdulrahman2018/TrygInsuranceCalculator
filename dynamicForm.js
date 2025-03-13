document.addEventListener("DOMContentLoaded", function () {
    function createForm() {
        var container = document.querySelector("header").nextElementSibling;
        if (!container) {
            console.error("Could not find the insertion point for the form.");
            return;
        }

        var form = document.createElement("form");
        form.setAttribute("id", "dynamicForm");

        // CVR Number Input
        var cvrLabel = document.createElement("label");
        cvrLabel.textContent = "CVR Number";
        var cvrInput = document.createElement("input");
        cvrInput.setAttribute("type", "text");
        cvrInput.setAttribute("id", "cvrNumber");
        cvrInput.setAttribute("name", "cvrNumber");
        
        // Name Fields
        var nameLabel = document.createElement("label");
        nameLabel.textContent = "Fornavn Efternavn";
        var nameInput = document.createElement("input");
        nameInput.setAttribute("type", "text");
        nameInput.setAttribute("id", "fullName");
        nameInput.setAttribute("name", "fullName");
        
        // Phone Number Input
        var phoneLabel = document.createElement("label");
        phoneLabel.textContent = "Telefon nr.";
        var phoneInput = document.createElement("input");
        phoneInput.setAttribute("type", "text");
        phoneInput.setAttribute("id", "phone");
        phoneInput.setAttribute("name", "phone");
        
        // Revenue Input
        var revenueLabel = document.createElement("label");
        revenueLabel.textContent = "Revenue";
        var revenueInput = document.createElement("input");
        revenueInput.setAttribute("type", "number");
        revenueInput.setAttribute("id", "revenue");
        revenueInput.setAttribute("name", "revenue");
        revenueInput.addEventListener("input", calculatePrice);
        
        // Pricing Option
        var pricingLabel = document.createElement("label");
        pricingLabel.textContent = "Pricing Factor";
        var pricingSelect = document.createElement("select");
        pricingSelect.setAttribute("id", "pricingFactor");
        pricingSelect.setAttribute("name", "pricingFactor");
        pricingSelect.addEventListener("change", calculatePrice);
        
        var option1 = document.createElement("option");
        option1.setAttribute("value", "0.08");
        option1.textContent = "8%";
        
        var option2 = document.createElement("option");
        option2.setAttribute("value", "0.10");
        option2.textContent = "10%";
        
        pricingSelect.appendChild(option1);
        pricingSelect.appendChild(option2);
        
        // Price Output
        var priceLabel = document.createElement("label");
        priceLabel.textContent = "Calculated Price";
        var priceOutput = document.createElement("span");
        priceOutput.setAttribute("id", "calculatedPrice");
        priceOutput.textContent = "0 kr.";
        
        // Submit Button
        var submitButton = document.createElement("button");
        submitButton.setAttribute("type", "button");
        submitButton.textContent = "Submit";
        submitButton.addEventListener("click", submitForm);
        
        // Append Elements
        form.appendChild(cvrLabel);
        form.appendChild(cvrInput);
        form.appendChild(document.createElement("br"));
        form.appendChild(nameLabel);
        form.appendChild(nameInput);
        form.appendChild(document.createElement("br"));
        form.appendChild(phoneLabel);
        form.appendChild(phoneInput);
        form.appendChild(document.createElement("br"));
        form.appendChild(revenueLabel);
        form.appendChild(revenueInput);
        form.appendChild(document.createElement("br"));
        form.appendChild(pricingLabel);
        form.appendChild(pricingSelect);
        form.appendChild(document.createElement("br"));
        form.appendChild(priceLabel);
        form.appendChild(priceOutput);
        form.appendChild(document.createElement("br"));
        form.appendChild(submitButton);

        container.insertBefore(form, container.firstChild);
    }

    function calculatePrice() {
        var revenue = document.getElementById("revenue").value;
        var factor = document.getElementById("pricingFactor").value;
        var price = revenue * factor;
        document.getElementById("calculatedPrice").textContent = price.toFixed(2) + " kr.";
    }

    function submitForm() {
        var formData = {
            cvrNumber: document.getElementById("cvrNumber").value,
            fullName: document.getElementById("fullName").value,
            phone: document.getElementById("phone").value,
            revenue: document.getElementById("revenue").value,
            pricingFactor: document.getElementById("pricingFactor").value,
            calculatedPrice: document.getElementById("calculatedPrice").textContent
        };
        console.log("Form Submitted:", formData);
    }

    createForm();
});