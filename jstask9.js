const productContainer = document.querySelector("#products");
const countDisplay = document.querySelector("#count");
const errorDiv = document.querySelector("#error");
const finalDiv = document.querySelector(".final");

// Fetch API
fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(products => {

        // Requirement 10: Total Count
        countDisplay.textContent = `Total Products: ${products.length}`;

        products.forEach(product => {

            // Card
            let card = document.createElement("div");
            card.setAttribute("class", "card");

            // Image
            let img = document.createElement("img");
            img.setAttribute("src", product.image);

            // Title (Requirement 4)
            let title = document.createElement("h3");
            let shortTitle = product.title.length > 30
                ? product.title.slice(0, 30) + "..."
                : product.title;
            title.textContent = shortTitle;

            // Price
            let price = document.createElement("p");
            price.textContent = `Price: ₹${product.price}`;

            // Category
            let category = document.createElement("p");
            category.textContent = `Category: ${product.category}`;

            // Description (Requirement 5)
            let desc = document.createElement("p");
            let shortDesc = product.description.length > 50
                ? product.description.slice(0, 50) + "..."
                : product.description;
            desc.textContent = shortDesc;

            // Requirement 6: Classification
            let tag = document.createElement("p");
            tag.textContent = product.price > 100
                ? "Expensive Product"
                : "Budget Product";

            // Requirement 7: Show Price Button
            let priceBtn = document.createElement("button");
            priceBtn.textContent = "Show Price";
            priceBtn.addEventListener("click", () => {
                alert(product.price);
            });

            // Requirement 8: Show Category Button
            let categoryBtn = document.createElement("button");
            categoryBtn.textContent = "Show Category";
            categoryBtn.addEventListener("click", () => {
                alert(product.category);
            });

            // Requirement 9: View Details Button
            let detailsBtn = document.createElement("button");
            detailsBtn.textContent = "View Details";
            detailsBtn.addEventListener("click", () => {
                alert(
                    `Title: ${product.title}\nPrice: ${product.price}\nCategory: ${product.category}`
                );
            });

            // Append all
            card.append(
                img,
                title,
                price,
                category,
                desc,
                tag,
                priceBtn,
                categoryBtn,
                detailsBtn
            );

            productContainer.append(card);
        });
    })
    .catch(() => {
        // Requirement 11: Error Handling
        errorDiv.textContent = "Something Went Wrong";
        errorDiv.style.backgroundColor = "red";
        errorDiv.style.color = "white";
        errorDiv.style.textAlign = "center";
    })
    .finally(() => {
        // Requirement 12: Final Status
        finalDiv.textContent = "API Request Completed Successfully";
    });