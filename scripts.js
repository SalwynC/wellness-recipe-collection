// Add this at the top of your main.js file
window.addEventListener('error', function(e) {
    console.error('JavaScript Error:', e.message);
});

// Recipe data
const recipes = [
    {
        id: 1,
        title: "Quinoa Salad 🥗",
        image: "https://www.allrecipes.com/thmb/AfZ5pJYvZSrlltkHiimLIOdEtjE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/229156-Zesty-Quinoa-Salad-ddmps-4x3-104421-df647e343ce543769a038cccf4c6419c.jpg",
        description: "A refreshing salad packed with nutrients.",
        prepTime: "15 mins",
        servings: 4,
        category: "lunch",
        ingredients: [
            "1 cup quinoa",
            "2 cups water", 
            "1 cucumber, diced",
            "1 cup cherry tomatoes",
            "1/4 cup olive oil",
            "Fresh herbs"
        ],
        instructions: [
            "Cook quinoa in water until fluffy",
            "Dice vegetables",
            "Mix ingredients",
            "Add dressing and serve"
        ]
    },
    {
        id: 2,
        title: "Avocado Toast 🥑",
        image: "https://www.eatingwell.com/thmb/5WPPXV5n1fFOKXSeO8s3D2KXIGM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/EatingWell-April-Avocado-Toast-Directions-03-23712072b7df44b8b3cd87681700e67b.jpg",
        description: "Simple yet delicious, topped with your favorite ingredients.",
        prepTime: "10 mins",
        servings: 2,
        category: "breakfast",
        ingredients: [
            "2 slices whole grain bread",
            "1 ripe avocado",
            "Salt and pepper",
            "Red pepper flakes",
            "Optional: eggs, tomatoes"
        ],
        instructions: [
            "Toast bread until golden",
            "Mash avocado and spread",
            "Add toppings",
            "Season and serve"
        ]
    },
    {
        id: 3,
        title: "Berry Smoothie Bowl 🫐",
        image: "https://www.tasteofhome.com/wp-content/uploads/2020/02/Berry-Smoothie-Bowl_EXPS_JMZ18_224489_B03_08_5b-5.jpg",
        description: "A nutritious and Instagram-worthy breakfast bowl.",
        prepTime: "5 mins",
        servings: 1,
        category: "breakfast",
        ingredients: [
            "Mixed berries",
            "Banana",
            "Greek yogurt", 
            "Honey",
            "Granola and fruits for topping"
        ],
        instructions: [
            "Blend fruits until smooth",
            "Pour into bowl",
            "Add toppings",
            "Serve immediately"
        ]
    },
    {
        id: 4,
        title: "Healthy Trail Mix 🥜",
        image: "https://masalachilli.com/wp-content/uploads/2021/11/Homemade-Trail-Mix-5.jpg",
        description: "Perfect snack for energy boost.",
        prepTime: "5 mins",
        servings: 8,
        category: "snacks",
        ingredients: [
            "Mixed nuts",
            "Dried fruits",
            "Dark chocolate chips",
            "Pumpkin seeds",
            "Coconut flakes"
        ],
        instructions: [
            "Mix all ingredients",
            "Store in airtight container",
            "Portion into servings"
        ]
    },
    {
        id: 5,
        title: "Buddha Bowl 🥙",
        image: "https://cdn.loveandlemons.com/wp-content/uploads/2020/06/IMG_25462.jpg",
        description: "Nutritious and colorful dinner bowl.",
        prepTime: "30 mins",
        servings: 2,
        category: "dinner",
        ingredients: [
            "Quinoa or brown rice",
            "Roasted vegetables",
            "Chickpeas",
            "Avocado",
            "Tahini dressing"
        ],
        instructions: [
            "Cook grain base",
            "Roast vegetables", 
            "Prepare dressing",
            "Assemble bowl"
        ]
    },
    {
        id: 6,
        title: "Chia Pudding 🥄",
        image: "https://healthyfitnessmeals.com/wp-content/uploads/2021/07/Chia-pudding-11.jpg",
        description: "Healthy and delicious dessert.",
        prepTime: "5 mins + overnight",
        servings: 2,
        category: "desserts",
        ingredients: [
            "Chia seeds",
            "Almond milk",
            "Honey or maple syrup",
            "Vanilla extract",
            "Fresh fruits for topping"
        ],
        instructions: [
            "Mix ingredients",
            "Refrigerate overnight",
            "Add toppings",
            "Enjoy!"
        ]
    },
    {
        id: 7,
        title: "Baked Apple Chips 🍎",
        image: "https://www.wellplated.com/wp-content/uploads/2017/09/Apple-Chips-recipe.jpg",
        description: "Crispy and sweet snack.",
        prepTime: "10 mins + 2 hrs baking",
        servings: 4,
        category: "snacks",
        ingredients: [
            "2-3 apples",
            "Cinnamon",
            "Optional: sweetener"
        ],
        instructions: [
            "Slice apples thinly",
            "Arrange on baking sheet",
            "Sprinkle with cinnamon",
            "Bake until crispy"
        ]
    },
    {
        id: 8,
        title: "Nice Cream 🍌",
        image: "https://www.forksoverknives.com/wp-content/uploads/Cherry-Garcia6-LR1-1.jpg",
        description: "Healthy ice cream alternative.",
        prepTime: "10 mins",
        servings: 2,
        category: "desserts",
        ingredients: [
            "Frozen bananas",
            "Splash of milk",
            "Optional: cocoa powder",
            "Toppings of choice"
        ],
        instructions: [
            "Blend frozen bananas",
            "Add milk if needed",
            "Add flavoring",
            "Freeze if firmer texture desired"
        ]
    },
    {
        id: 9,
        title: "Chickpea Salad 🥗",
        image: "images/Chickpea Salad.jpeg",
        description: "A protein-packed salad with a zesty dressing.",
        prepTime: "10 mins",
        servings: 4,
        category: "lunch",
        ingredients: [
            "2 cans chickpeas, drained and rinsed",
            "1 cucumber, diced",
            "1 red onion, finely chopped",
            "2 cups cherry tomatoes, halved",
            "1 cup feta cheese, crumbled",
            "Fresh parsley, chopped",
            "Olive oil and lemon dressing"
        ],
        instructions: [
            "Combine chickpeas, cucumber, onion, and tomatoes in a bowl",
            "Add crumbled feta cheese",
            "Toss with olive oil and lemon dressing",
            "Garnish with fresh parsley",
            "Chill for 30 minutes before serving"
        ]
    },
    {
        id: 10,
        title: "Sweet Potato Fries 🍠",
        image: "https://www.gimmesomeoven.com/wp-content/uploads/2011/03/The-Best-Crispy-Baked-Sweet-Potato-Fries-Recipe-2.jpg",
        description: "Crispy and healthy fries baked to perfection.",
        prepTime: "15 mins",
        servings: 2,
        category: "snacks",
        ingredients: [
            "2 large sweet potatoes",
            "2 tablespoons olive oil",
            "1 teaspoon paprika",
            "1/2 teaspoon garlic powder",
            "Salt and pepper to taste"
        ],
        instructions: [
            "Preheat oven to 425°F (220°C)",
            "Cut sweet potatoes into even strips",
            "Toss with oil and seasonings",
            "Arrange on baking sheet without overlapping",
            "Bake for 25-30 minutes, flipping halfway"
        ]
    },
    {
        id: 11,
        title: "Greek Yogurt Parfait 🍓",
        image: "https://www.eatingwell.com/thmb/5WPPXV5n1fFOKXSeO8s3D2KXIGM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/EatingWell-April-Avocado-Toast-Directions-03-23712072b7df44b8b3cd87681700e67b.jpg",
        description: "A delicious and nutritious breakfast option.",
        prepTime: "5 mins",
        servings: 1,
        category: "breakfast",
        ingredients: [
            "1 cup Greek yogurt",
            "1/2 cup granola",
            "Mixed berries",
            "Honey",
            "Optional: nuts and seeds"
        ],
        instructions: [
            "Layer Greek yogurt in a glass",
            "Add a layer of granola",
            "Top with fresh berries",
            "Drizzle with honey",
            "Add additional toppings if desired"
        ]
    }
];

// Separate initial recipes and additional recipes
const initialRecipes = recipes.slice(0, 8); // First 8 recipes
const additionalRecipes = recipes.slice(8); // Remaining recipes

// Track if additional recipes are shown
let showingAdditionalRecipes = false;

// Function to create recipe cards
function createRecipeCard(recipe) {
    return `
        <div class="col-md-4 mb-4" data-aos="fade-up">
            <div class="recipe-card card h-100">
                <div class="card-img-wrapper">
                    <img src="${recipe.image}" 
                         alt="${recipe.title}" 
                         class="card-img-top" 
                         onerror="handleImageError(this)"
                         loading="lazy">
                    <span class="category-badge badge bg-${getCategoryColor(recipe.category)}">
                        ${recipe.category}
                    </span>
                </div>
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${recipe.title}</h5>
                    <p class="card-text flex-grow-1">${recipe.description}</p>
                    <div class="mt-auto">
                        <p class="card-text">
                            <small class="text-muted">
                                <i class="far fa-clock"></i> ${recipe.prepTime} | 
                                <i class="fas fa-utensils"></i> ${recipe.servings} servings
                            </small>
                        </p>
                        <button class="btn btn-success w-100" 
                                onclick="showRecipeDetails(${recipe.id})"
                                data-bs-toggle="tooltip"
                                title="View full recipe">
                            View Recipe
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Helper function for category colors
function getCategoryColor(category) {
    const colors = {
        breakfast: 'primary',
        lunch: 'success',
        dinner: 'danger',
        snack: 'warning',
        dessert: 'info'
    };
    return colors[category.toLowerCase()] || 'secondary';
}

// Function to create recipe details modal content
function createRecipeDetails(recipe) {
    return `
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">${recipe.title}</h5>
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>
                <div class="modal-body">
                    <img src="${recipe.image}" alt="${recipe.title}" class="img-fluid mb-3">
                    <h6>Ingredients:</h6>
                    <ul>
                        ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
                    </ul>
                    <h6>Instructions:</h6>
                    <ol>
                        ${recipe.instructions.map(instruction => `<li>${instruction}</li>`).join('')}
                    </ol>
                    <p><strong>Prep Time:</strong> ${recipe.prepTime}</p>
                    <p><strong>Servings:</strong> ${recipe.servings}</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    `;
}

// Function to toggle recipe details
function showRecipeDetails(recipeId) {
    const recipe = allRecipes.find(r => r.id === recipeId);
    if (!recipe) {
        console.error('Recipe not found:', recipeId);
        return;
    }

    const modalContent = `
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">${recipe.title}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <div class="recipe-image-container mb-4">
                        <img src="${recipe.image}" 
                             alt="${recipe.title}" 
                             class="img-fluid rounded" 
                             onerror="handleImageError(this)">
                    </div>
                    <div class="recipe-details">
                        <div class="mb-3">
                            <span class="badge bg-${getCategoryColor(recipe.category)} me-2">
                                ${recipe.category}
                            </span>
                            <span class="text-muted">
                                <i class="far fa-clock"></i> ${recipe.prepTime} | 
                                <i class="fas fa-utensils"></i> ${recipe.servings} servings
                            </span>
                        </div>
                        <h6 class="mb-3">Ingredients:</h6>
                        <ul class="list-group mb-4">
                            ${recipe.ingredients.map(ingredient => `
                                <li class="list-group-item">
                                    <i class="fas fa-check-circle text-success me-2"></i>
                                    ${ingredient}
                                </li>
                            `).join('')}
                        </ul>
                        <h6 class="mb-3">Instructions:</h6>
                        <ol class="list-group list-group-numbered mb-3">
                            ${recipe.instructions.map(instruction => `
                                <li class="list-group-item">
                                    ${instruction}
                                </li>
                            `).join('')}
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    `;

    let modal = document.getElementById('recipeModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'recipeModal';
        modal.className = 'modal fade';
        document.body.appendChild(modal);
    }

    modal.innerHTML = modalContent;
    const modalInstance = new bootstrap.Modal(modal);
    modalInstance.show();
}

// Function to filter recipes
window.filterRecipes = function(category) {
    showLoading();
    setTimeout(() => {
        const searchBar = document.getElementById('searchBar');
        const searchTerm = searchBar ? searchBar.value.toLowerCase() : '';
        let recipesToFilter = showingAdditionalRecipes ? recipes : initialRecipes;
        let filteredRecipes = recipesToFilter;
        
        if (category !== 'all') {
            filteredRecipes = filteredRecipes.filter(recipe => recipe.category === category);
        }
        
        if (searchTerm) {
            filteredRecipes = filteredRecipes.filter(recipe => 
                recipe.title.toLowerCase().includes(searchTerm) ||
                recipe.description.toLowerCase().includes(searchTerm) ||
                recipe.category.toLowerCase().includes(searchTerm)
            );
        }
        
        const recipeCards = document.getElementById('recipe-cards');
        if (recipeCards) {
            recipeCards.innerHTML = filteredRecipes.map(createRecipeCard).join('');
        }

        // Update load more button visibility
        const loadMoreBtn = document.getElementById('loadMoreBtn');
        if (loadMoreBtn) {
            loadMoreBtn.style.display = showingAdditionalRecipes ? 'none' : 'inline-block';
        }
    }, 300);
};

// Add loadMoreRecipes function
window.loadMoreRecipes = function() {
    showLoading();
    setTimeout(() => {
        showingAdditionalRecipes = true;
        
        const recipeCards = document.getElementById('recipe-cards');
        if (recipeCards) {
            // Create a row container for new recipes
            const newRecipesRow = document.createElement('div');
            newRecipesRow.className = 'row';
            
            // Add new recipes
            additionalRecipes.forEach(recipe => {
                newRecipesRow.innerHTML += createRecipeCard(recipe);
            });
            
            // Append the new row to recipe cards
            recipeCards.appendChild(newRecipesRow);
        }

        // Hide the load more button
        const loadMoreBtn = document.getElementById('loadMoreBtn');
        if (loadMoreBtn) {
            loadMoreBtn.style.display = 'none';
        }

        // Smooth scroll to new recipes
        const firstNewRecipe = document.querySelector('.fade-in');
        if (firstNewRecipe) {
            firstNewRecipe.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, 300);
};

// Function to handle contact form submission
window.handleSubmit = function(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    alert('Thank you for your message! We will get back to you soon.');
    event.target.reset();
    return false;
};

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initial load of initial recipes only
    showingAdditionalRecipes = false;
    filterRecipes('all');

    // Set up event listeners
    const searchBar = document.getElementById('searchBar');
    if (searchBar) {
        searchBar.addEventListener('input', () => filterRecipes('all'));
    }

    // Add active state to filter buttons
    const filterButtons = document.querySelectorAll('.btn-group .btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Set up contact form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleSubmit);
    }

    // Initialize tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Initialize popovers
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl);
    });

    // Animate recipe cards on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
                entry.target.style.opacity = 1;
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.card').forEach(card => {
        observer.observe(card);
    });

    // Enhanced recipe filtering with animations
    window.filterRecipes = function(category) {
        showLoading();
        setTimeout(() => {
            const recipeCards = document.getElementById('recipe-cards');
            if (!recipeCards) return;

            // Remove existing animations
            recipeCards.querySelectorAll('.card').forEach(card => {
                card.classList.remove('animate-fade-in');
            });

            // Apply filter logic
            let recipesToShow = category === 'all' ? 
                [...recipes, ...lunchRecipes] : 
                [...recipes, ...lunchRecipes].filter(recipe => recipe.category === category);

            // Update DOM with filtered recipes
            recipeCards.innerHTML = recipesToShow.map(recipe => createRecipeCard(recipe)).join('');

            // Add animations to new cards
            recipeCards.querySelectorAll('.card').forEach((card, index) => {
                setTimeout(() => {
                    card.classList.add('animate-fade-in');
                }, index * 100);
            });

            hideLoading();
        }, 300);
    };

    // Enhanced modal handling
    window.showRecipeDetails = function(recipeId) {
        const recipe = [...recipes, ...lunchRecipes].find(r => r.id === recipeId);
        if (!recipe) return;

        const modal = new bootstrap.Modal(document.getElementById('recipeModal'));
        document.getElementById('recipeModal').querySelector('.modal-content').innerHTML = createRecipeDetails(recipe);
        modal.show();
    };
});

// Add loading animation
function showLoading() {
    const recipeCards = document.getElementById('recipe-cards');
    if (recipeCards) {
        recipeCards.innerHTML += `
            <div class="col-12 text-center" id="loading-spinner">
                <div class="spinner-border text-primary" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            </div>
        `;
    }
}

// Add this CSS for the fade-in animation
const style = document.createElement('style');
style.textContent = `
    .fade-in {
        animation: fadeIn 0.8s ease-in forwards;
        opacity: 0;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Add these new lunch recipes to your existing recipes array
const lunchRecipes = [
    {
        id: 15,
        title: "Mediterranean Couscous Bowl 🥙",
        image: "https://hurrythefoodup.com/wp-content/uploads/2022/04/mediterranean-couscous-bowl-ready-1024x1536.jpg",
        fallbackImage: "./images/mediterranean-bowl.jpg",
        description: "A light and refreshing Mediterranean-inspired lunch bowl.",
        prepTime: "20 mins",
        servings: 2,
        category: "lunch",
        ingredients: [
            "1 cup pearl couscous",
            "1 cucumber, diced",
            "1 cup cherry tomatoes, halved",
            "1/2 red onion, finely chopped",
            "1/2 cup Kalamata olives",
            "200g feta cheese, crumbled",
            "Fresh mint and parsley",
            "Lemon-olive oil dressing"
        ],
        instructions: [
            "Cook couscous according to package instructions",
            "Chop all vegetables and herbs",
            "Mix couscous with vegetables and herbs",
            "Add crumbled feta and olives",
            "Drizzle with lemon-olive oil dressing",
            "Season with salt and pepper to taste"
        ]
    },
    {
        id: 16,
        title: "Asian Sesame Noodle Salad 🥢",
        image: "https://bing.com/th?id=OSK.86aa9ca262e6bf449ade6ec87b6591ae",
        fallbackImage: "./images/sesame-noodles.jpg",
        description: "Cold noodle salad with a delicious sesame dressing.",
        prepTime: "25 mins",
        servings: 4,
        category: "lunch",
        ingredients: [
            "300g soba noodles",
            "2 carrots, julienned",
            "1 red bell pepper, sliced",
            "2 cups edamame, shelled",
            "3 green onions, chopped",
            "Sesame seeds for garnish",
            "Sesame-ginger dressing",
            "Fresh cilantro"
        ],
        instructions: [
            "Cook soba noodles and rinse with cold water",
            "Prepare vegetables and edamame",
            "Mix noodles with vegetables",
            "Toss with sesame-ginger dressing",
            "Garnish with sesame seeds and cilantro",
            "Serve chilled"
        ]
    },
    {
        id: 17,
        title: "Protein Power Lunch Box 🥪",
        image: "https://th.bing.com/th/id/OIP.G1Ft7PdAPmn9xew7GF3dLAHaLH?rs=1&pid=ImgDetMain",
        fallbackImage: "./images/protein-box.jpg",
        description: "A balanced bento-style lunch box perfect for meal prep.",
        prepTime: "30 mins",
        servings: 3,
        category: "lunch",
        ingredients: [
            "200g grilled chicken breast",
            "2 hard-boiled eggs",
            "1 cup quinoa",
            "Mixed salad greens",
            "Cherry tomatoes",
            "1 avocado",
            "Hummus for dipping",
            "Mixed nuts and seeds"
        ],
        instructions: [
            "Cook quinoa and let it cool",
            "Grill chicken and slice",
            "Boil eggs and cut in half",
            "Arrange all ingredients in compartments",
            "Add hummus in a small container",
            "Pack dressing separately"
        ]
    }
];

// Add CSS for lunch section styling
const lunchSectionStyles = `
    .lunch-section {
        padding: 2rem 0;
        background-color: #f8f9fa;
    }

    .lunch-header {
        text-align: center;
        margin-bottom: 2rem;
    }

    .lunch-card {
        border-radius: 15px;
        transition: transform 0.3s ease;
    }

    .lunch-card:hover {
        transform: translateY(-5px);
    }

    .lunch-badge {
        position: absolute;
        top: 10px;
        right: 10px;
        background-color: #28a745;
        color: white;
        padding: 5px 10px;
        border-radius: 20px;
        font-size: 0.8rem;
    }
`;

// Function to display lunch recipes
function displayLunchRecipes() {
    const lunchSection = document.createElement('div');
    lunchSection.className = 'lunch-section';
    lunchSection.innerHTML = `
        <div class="container">
            <div class="lunch-header">
                <h2>🥗 Healthy Lunch Ideas</h2>
                <p class="text-muted">Quick and nutritious lunch recipes for your busy day</p>
            </div>
            <div class="row">
                ${lunchRecipes.map(recipe => createLunchCard(recipe)).join('')}
            </div>
        </div>
    `;
    
    // Insert after the main recipes section
    const recipesSection = document.getElementById('recipes');
    recipesSection.parentNode.insertBefore(lunchSection, recipesSection.nextSibling);
}

// Function to create lunch recipe cards
function createLunchCard(recipe) {
    return `
        <div class="col-md-4 mb-4">
            <div class="card lunch-card h-100">
                <div class="position-relative">
                    <img 
                        src="${recipe.image}" 
                        data-fallback="${recipe.fallbackImage}"
                        alt="${recipe.title}" 
                        class="card-img-top" 
                        onerror="handleImageError(this)"
                        style="height: 200px; object-fit: cover;">
                    <span class="lunch-badge">Lunch</span>
                </div>
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${recipe.title}</h5>
                    <p class="card-text flex-grow-1">${recipe.description}</p>
                    <div class="mt-auto">
                        <p class="card-text">
                            <small class="text-muted">
                                <i class="far fa-clock"></i> ${recipe.prepTime} | 
                                <i class="fas fa-utensils"></i> ${recipe.servings} servings
                            </small>
                        </p>
                        <button class="btn btn-success w-100" onclick="showRecipeDetails(${recipe.id})">
                            View Recipe
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Add this to your existing DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', function() {
    // ... existing code ...
    
    // Add lunch section styles
    const style = document.createElement('style');
    style.textContent = lunchSectionStyles;
    document.head.appendChild(style);
    
    // Display lunch recipes
    displayLunchRecipes();
}); 

// Combine all recipes into one array
const allRecipes = [
    ...recipes,
    ...lunchRecipes,
    // Add any missing recipes here
    {
        id: 15,
        title: "Mediterranean Couscous Bowl 🥙",
        image: "https://hurrythefoodup.com/wp-content/uploads/2022/04/mediterranean-couscous-bowl-ready-1024x1536.jpg",
        description: "A light and refreshing Mediterranean-inspired lunch bowl.",
        prepTime: "20 mins",
        servings: 2,
        category: "lunch",
        ingredients: [
            "1 cup pearl couscous",
            "2 cups vegetable broth",
            "1 cucumber, diced",
            "1 cup cherry tomatoes, halved",
            "1/2 red onion, finely chopped",
            "1/2 cup Kalamata olives",
            "200g feta cheese, crumbled"
        ],
        instructions: [
            "Cook couscous in vegetable broth",
            "Dice all vegetables",
            "Combine all ingredients in a bowl",
            "Add dressing and toss",
            "Serve immediately or chill"
        ]
    },
    {
        id: 16,
        title: "Asian Sesame Noodle Salad 🥢",
        image: "https://www.foodiecrush.com/wp-content/uploads/2019/07/Sesame-Soba-Noodles-foodiecrush.com-018.jpg",
        description: "Cold noodle salad with a delicious sesame dressing.",
        prepTime: "25 mins",
        servings: 4,
        category: "lunch",
        ingredients: [
            "300g soba noodles",
            "2 carrots, julienned",
            "1 red bell pepper, sliced",
            "2 cups edamame",
            "3 green onions, chopped"
        ],
        instructions: [
            "Cook soba noodles according to package",
            "Prepare vegetables",
            "Mix dressing ingredients",
            "Combine noodles and vegetables",
            "Toss with dressing and serve"
        ]
    },
    {
        id: 17,
        title: "Protein Power Lunch Box 🥪",
        image: "https://www.eatwell101.com/wp-content/uploads/2020/01/Meal-Prep-Lunch-Box-recipe.jpg",
        description: "A balanced bento-style lunch box perfect for meal prep.",
        prepTime: "30 mins",
        servings: 3,
        category: "lunch",
        ingredients: [
            "200g grilled chicken breast",
            "2 hard-boiled eggs",
            "1 cup quinoa",
            "Mixed salad greens",
            "Cherry tomatoes"
        ],
        instructions: [
            "Cook quinoa and let cool",
            "Grill chicken and slice",
            "Boil eggs and slice in half",
            "Arrange all ingredients in compartments",
            "Add dressing on the side"
        ]
    }
];

// Function to display all recipes
function displayAllRecipes() {
    try {
        const recipeContainer = document.getElementById('recipe-cards');
        if (!recipeContainer) {
            console.warn('Recipe container element not found');
            return;
        }

        const recipeHTML = recipes.map(recipe => {
            if (!recipe || !recipe.id || !recipe.title) {
                console.warn('Invalid recipe data:', recipe);
                return '';
            }

            return `
                <div class="col-md-4 mb-4">
                    <div class="card h-100">
                            <img src="${recipe.image || 'images/default-recipe.jpg'}" 
                             alt="${recipe.title}" 
                             class="card-img-top" 
                             onerror="this.src='images/default-recipe.jpg'"
                             style="height: 200px; object-fit: cover;">
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title">${recipe.title}</h5>
                            <p class="card-text flex-grow-1">${recipe.description || ''}</p>
                            <div class="mt-auto">
                                <p class="card-text">
                                    <small class="text-muted">
                                        <i class="far fa-clock"></i> ${recipe.prepTime || 'N/A'} | 
                                        <i class="fas fa-utensils"></i> ${recipe.servings || 0} servings
                                    </small>
                                </p>
                                <button class="btn btn-success w-100" 
                                        onclick="showRecipeDetails(${recipe.id})"
                                        type="button">
                                    View Recipe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }).join('');

        recipeContainer.innerHTML = recipeHTML;

    } catch (error) {
        console.error('Error displaying recipes:', error);
        const recipeContainer = document.getElementById('recipe-cards');
        if (recipeContainer) {
            recipeContainer.innerHTML = '<p class="text-danger">Error loading recipes. Please try again later.</p>';
        }
    }
}

// Function to show recipe details
function showRecipeDetails(recipeId) {
    const recipe = allRecipes.find(r => r.id === recipeId);
    if (!recipe) return;

    const modalHTML = `
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header bg-success text-white">
                    <h5 class="modal-title">${recipe.title}</h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <img src="${recipe.image}" 
                         alt="${recipe.title}" 
                         class="img-fluid rounded mb-3"
                         onerror="this.src='">
                    <div class="recipe-details">
                        <div class="mb-4">
                            <h6 class="fw-bold">Preparation Time:</h6>
                            <p>${recipe.prepTime}</p>
                            <h6 class="fw-bold">Servings:</h6>
                            <p>${recipe.servings}</p>
                        </div>
                        <div class="mb-4">
                            <h6 class="fw-bold">Ingredients:</h6>
                            <ul class="list-group list-group-flush">
                                ${recipe.ingredients.map(ingredient => 
                                    `<li class="list-group-item">${ingredient}</li>`
                                ).join('')}
                            </ul>
                        </div>
                        <div class="mb-4">
                            <h6 class="fw-bold">Instructions:</h6>
                            <ol class="list-group list-group-numbered">
                                ${recipe.instructions.map(instruction => 
                                    `<li class="list-group-item">${instruction}</li>`
                                ).join('')}
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    let modal = document.getElementById('recipeModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'recipeModal';
        modal.className = 'modal fade';
        document.body.appendChild(modal);
    }

    modal.innerHTML = modalHTML;
    const modalInstance = new bootstrap.Modal(modal);
    modalInstance.show();
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Display all recipes initially
    displayAllRecipes();

    // Set up search functionality
    const searchBar = document.getElementById('searchBar');
    if (searchBar) {
        searchBar.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const filteredRecipes = allRecipes.filter(recipe => 
                recipe.title.toLowerCase().includes(searchTerm) ||
                recipe.description.toLowerCase().includes(searchTerm)
            );
            displayFilteredRecipes(filteredRecipes);
        });
    }

    // Set up category filters
    const categoryButtons = document.querySelectorAll('.category-btn');
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.dataset.category;
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const filteredRecipes = category === 'all' 
                ? allRecipes 
                : allRecipes.filter(recipe => recipe.category === category);
            
            displayFilteredRecipes(filteredRecipes);
        });
    });
});

// Function to display filtered recipes
function displayFilteredRecipes(filteredRecipes) {
    const recipeContainer = document.getElementById('recipe-cards');
    if (!recipeContainer) return;

    const recipeHTML = filteredRecipes.map(recipe => `
        <div class="col-md-4 mb-4">
            <div class="card h-100">
                <img src="${recipe.image}" 
                     alt="${recipe.title}" 
                     class="card-img-top" 
                     onerror="this.src='images/default-recipe.jpg'"
                     style="height: 200px; object-fit: cover;">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${recipe.title}</h5>
                    <p class="card-text flex-grow-1">${recipe.description}</p>
                    <div class="mt-auto">
                        <p class="card-text">
                            <small class="text-muted">
                                <i class="far fa-clock"></i> ${recipe.prepTime} | 
                                <i class="fas fa-utensils"></i> ${recipe.servings} servings
                            </small>
                        </p>
                        <button class="btn btn-success w-100" 
                                onclick="showRecipeDetails(${recipe.id})">
                            View Recipe
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `).join('');

    recipeContainer.innerHTML = recipeHTML;
}

// Image error handling function
function handleImageError(img) {
    console.log('Image failed to load:', img.src);
    img.onerror = null; // Prevent infinite loop
    img.src = 'images/default-recipe.jpg';
    img.alt = 'Recipe placeholder image';
}

// Recipe data structure
const healthyRecipes = [
    {
        id: 1,
        title: "Quinoa Buddha Bowl",
        category: "lunch",
        image: "images/quinoa-bowl.jpg",
        prepTime: "25 mins",
        servings: 2,
        description: "A nutritious bowl packed with quinoa, roasted vegetables, and tahini dressing.",
        ingredients: [
            "1 cup quinoa",
            "2 cups mixed vegetables (broccoli, carrots, sweet potato)",
            "1 can chickpeas, drained",
            "2 tbsp olive oil",
            "1 avocado",
            "2 tbsp tahini",
            "1 lemon, juiced",
            "Salt and pepper to taste"
        ],
        instructions: [
            "Cook quinoa according to package instructions",
            "Roast vegetables with olive oil at 400°F for 20 minutes",
            "Drain and rinse chickpeas, season and roast for 15 minutes",
            "Make tahini dressing by combining tahini, lemon juice, and water",
            "Assemble bowls with quinoa, roasted veggies, chickpeas",
            "Top with sliced avocado and drizzle with dressing"
        ],
        nutritionInfo: {
            calories: 450,
            protein: "15g",
            carbs: "52g",
            fat: "22g",
            fiber: "12g"
        }
    },
    // Add more recipes...
];

// Extend healthyRecipes array with lunch recipes
healthyRecipes.push(
    {
        id: 101,
        title: "Mediterranean Chicken Salad",
        category: "lunch",
        image: "images/med-chicken-salad.jpg",
        prepTime: "20 mins", 
        servings: 4,
        description: "Fresh and light Mediterranean-style chicken salad with olives and feta.",
        ingredients: [
            "2 chicken breasts, cooked and diced",
            "2 cups mixed greens",
            "1 cucumber, diced",
            "1 cup cherry tomatoes",
            "1/2 red onion, sliced", 
            "1/2 cup kalamata olives",
            "1/2 cup feta cheese",
            "3 tbsp olive oil",
            "2 tbsp balsamic vinegar",
            "1 tsp oregano",
            "Salt and pepper to taste"
        ],
        instructions: [
            "Combine mixed greens, cucumber, tomatoes, and onion in a large bowl",
            "Add diced chicken, olives, and crumbled feta",
            "Mix olive oil, balsamic vinegar, oregano, salt, and pepper",
            "Drizzle dressing over salad and toss gently", 
            "Serve immediately"
        ],
        nutritionInfo: {
            calories: 320,
            protein: "28g",
            carbs: "12g", 
            fat: "18g",
            fiber: "4g"
        },
        // Add button actions
        actions: {
            print: function() {
                window.print();
            },
            share: function() {
                // Share functionality
                const shareData = {
                    title: this.title,
                    text: this.description,
                    url: window.location.href
                };
                navigator.share(shareData);
            },
            favorite: function() {
                // Add to favorites functionality
                const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
                favorites.push(this.id);
                localStorage.setItem('favorites', JSON.stringify(favorites));
            }
        }
    },
    {
        id: 102,
        title: "Asian Noodle Bowl",
        category: "lunch",
        image: "images/asian-noodle-bowl.jpg",
        prepTime: "25 mins",
        servings: 2,
        description: "Vibrant rice noodle bowl with fresh vegetables and peanut sauce",
        ingredients: [
            "8 oz rice noodles",
            "1 cup shredded carrots",
            "1 cup edamame",
            "1 red bell pepper, sliced",
            "2 cups baby spinach",
            "1/4 cup peanut sauce",
            "Sesame seeds for garnish"
        ],
        instructions: [
            "Cook rice noodles according to package directions",
            "Prepare fresh vegetables",
            "Make peanut sauce",
            "Combine noodles, vegetables and sauce",
            "Top with sesame seeds"
        ],
        nutritionInfo: {
            calories: 380,
            protein: "12g",
            carbs: "58g",
            fat: "14g",
            fiber: "6g"
        },
        actions: {
            print: function() {
                window.print();
            },
            share: function() {
                const shareData = {
                    title: this.title,
                    text: this.description,
                    url: window.location.href
                };
                navigator.share(shareData);
            },
            favorite: function() {
                const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
                favorites.push(this.id);
                localStorage.setItem('favorites', JSON.stringify(favorites));
            }
        }
    }
);

// Function to show recipe details
function showRecipeDetails(recipeId) {
    // Find recipe from both arrays
    const recipe = [...healthyRecipes, ...lunchRecipes].find(r => r.id === recipeId);
    
    if (!recipe) {
        console.error('Recipe not found:', recipeId);
        return;
    }

    const modalContent = `
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header bg-success text-white">
                    <h5 class="modal-title">${recipe.title}</h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-6">
                            <img src="${recipe.image}" 
                                 alt="${recipe.title}" 
                                 class="img-fluid rounded mb-3" 
                                 onerror="handleImageError(this)">
                        </div>
                        <div class="col-md-6">
                            <div class="recipe-info mb-3">
                                <span class="badge bg-success me-2">
                                    <i class="far fa-clock"></i> ${recipe.prepTime}
                                </span>
                                <span class="badge bg-info">
                                    <i class="fas fa-utensils"></i> ${recipe.servings} servings
                                </span>
                            </div>
                            <div class="nutrition-info p-3 bg-light rounded mb-3">
                                <h6 class="mb-2">Nutrition Information</h6>
                                <div class="row">
                                    <div class="col">
                                        <small>Calories: ${recipe.nutritionInfo.calories}</small>
                                    </div>
                                    <div class="col">
                                        <small>Protein: ${recipe.nutritionInfo.protein}</small>
                                    </div>
                                    <div class="col">
                                        <small>Carbs: ${recipe.nutritionInfo.carbs}</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="ingredients-section mb-4">
                        <h6 class="border-bottom pb-2">Ingredients</h6>
                        <ul class="list-group list-group-flush">
                            ${recipe.ingredients.map(ingredient => `
                                <li class="list-group-item bg-transparent">
                                    <i class="fas fa-check-circle text-success me-2"></i>
                                    ${ingredient}
                                </li>
                            `).join('')}
                        </ul>
                    </div>

                    <div class="instructions-section mb-4">
                        <h6 class="border-bottom pb-2">Instructions</h6>
                        <ol class="list-group list-group-numbered">
                            ${recipe.instructions.map(instruction => `
                                <li class="list-group-item bg-transparent">
                                    ${instruction}
                                </li>
                            `).join('')}
                        </ol>
                    </div>

                    <div class="d-flex justify-content-center gap-3">
                        <button class="btn btn-outline-success" onclick="printRecipe('${recipe.id}')">
                            <i class="fas fa-print me-2"></i>Print Recipe
                        </button>
                        <button class="btn btn-success" onclick="saveRecipe('${recipe.id}')">
                            <i class="fas fa-bookmark me-2"></i>Save Recipe
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Remove existing modal if present
    const existingModal = document.getElementById('recipeModal');
    if (existingModal) {
        existingModal.remove();
    }

    // Add new modal to body
    document.body.insertAdjacentHTML('beforeend', modalContent);

    // Show modal
    const modal = new bootstrap.Modal(document.getElementById('recipeModal'));
    modal.show();
}

// Print recipe
function printRecipe(recipeId) {
    const recipe = [...healthyRecipes, ...lunchRecipes].find(r => r.id === recipeId);
    if (!recipe) return;

    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>${recipe.title} - Recipe</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
            <style>
                body { padding: 20px; }
                @media print {
                    .no-print { display: none; }
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h2 class="mb-4">${recipe.title}</h2>
                <div class="mb-4">
                    <p><strong>Prep Time:</strong> ${recipe.prepTime}</p>
                    <p><strong>Servings:</strong> ${recipe.servings}</p>
                </div>
                <div class="mb-4">
                    <h4>Ingredients</h4>
                    <ul>
                        ${recipe.ingredients.map(i => `<li>${i}</li>`).join('')}
                    </ul>
                </div>
                <div class="mb-4">
                    <h4>Instructions</h4>
                    <ol>
                        ${recipe.instructions.map(i => `<li>${i}</li>`).join('')}
                    </ol>
                </div>
                <div class="no-print text-center mt-4">
                    <button onclick="window.print()" class="btn btn-primary">Print Recipe</button>
                </div>
            </div>
        </body>
        </html>
    `);
    printWindow.document.close();
}

// Save recipe
function saveRecipe(recipeId) {
    const recipe = [...healthyRecipes, ...lunchRecipes].find(r => r.id === recipeId);
    if (!recipe) return;

    try {
        let savedRecipes = JSON.parse(localStorage.getItem('savedRecipes') || '[]');
        
        if (!savedRecipes.find(r => r.id === recipe.id)) {
            savedRecipes.push(recipe);
            localStorage.setItem('savedRecipes', JSON.stringify(savedRecipes));
            
            // Show success message
            const alert = document.createElement('div');
            alert.className = 'alert alert-success alert-dismissible fade show';
            alert.innerHTML = `
                Recipe saved successfully!
                <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
            `;
            
            const modalBody = document.querySelector('.modal-body');
            if (modalBody) {
                modalBody.insertBefore(alert, modalBody.firstChild);
            }
        } else {
            alert('This recipe is already saved!');
        }
    } catch (error) {
        console.error('Error saving recipe:', error);
        alert('Error saving recipe. Please try again.');
    }
}

// Image handling utilities
const imageUtils = {
    defaultImagePath: 'images/default-recipe.jpg',
    imagePlaceholder: 'images/placeholder.jpg',
    
    // Handle image load errors
    handleImageError: function(img) {
        console.log('Image failed to load:', img.src);
        // First try the default recipe image
        img.onerror = () => {
            // If default image also fails, use placeholder
            img.onerror = null; // Prevent infinite loop
            img.src = this.imagePlaceholder;
        };
        img.src = this.defaultImagePath;
    },

    // Preload images
    preloadImages: function() {
        const images = [this.defaultImagePath, this.imagePlaceholder];
        images.forEach(src => {
            const img = new Image();
            img.src = src;
        });
    }
};

// Recipe card creation with image handling
function createRecipeCard(recipe) {
    return `
        <div class="col-md-4 mb-4">
            <div class="card recipe-card">
                <div class="card-img-container">
                    <img src="${recipe.image || imageUtils.defaultImagePath}" 
                         class="card-img-top"
                         alt="${recipe.title}"
                         onerror="imageUtils.handleImageError(this)"
                         loading="lazy">
                    <div class="category-badge ${recipe.category}-badge">
                        ${recipe.category}
                    </div>
                </div>
                <div class="card-body">
                    <h5 class="card-title">${recipe.title}</h5>
                    <p class="card-text">${recipe.description}</p>
                    <div class="recipe-meta">
                        <span><i class="far fa-clock"></i> ${recipe.prepTime}</span>
                        <span><i class="fas fa-utensils"></i> ${recipe.servings} servings</span>
                    </div>
                    <button class="btn btn-success w-100 mt-3" 
                            onclick="showRecipeDetails('${recipe.id}')">
                        View Recipe
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Display recipes with error handling
function displayRecipes(recipes, containerId = 'recipe-cards') {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`Container with ID '${containerId}' not found`);
        return;
    }

    try {
        const recipeHTML = recipes.map(recipe => createRecipeCard(recipe)).join('');
        container.innerHTML = recipeHTML;
    } catch (error) {
        console.error('Error displaying recipes:', error);
        container.innerHTML = `
            <div class="alert alert-danger">
                Error loading recipes. Please try again later.
            </div>
        `;
    }
}

// Recipe details modal with image handling
function showRecipeDetails(recipeId) {
    const recipe = allRecipes.find(r => r.id === recipeId);
    if (!recipe) {
        console.error('Recipe not found:', recipeId);
        return;
    }

    const modalContent = `
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header bg-success text-white">
                    <h5 class="modal-title">${recipe.title}</h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <div class="recipe-image-container mb-4">
                        <img src="${recipe.image || imageUtils.defaultImagePath}" 
                             class="img-fluid rounded"
                             alt="${recipe.title}"
                             onerror="imageUtils.handleImageError(this)">
                    </div>
                    <div class="recipe-details">
                        <div class="mb-3">
                            <span class="badge bg-${getCategoryColor(recipe.category)} me-2">
                                ${recipe.category}
                            </span>
                            <span class="text-muted">
                                <i class="far fa-clock"></i> ${recipe.prepTime} | 
                                <i class="fas fa-utensils"></i> ${recipe.servings} servings
                            </span>
                        </div>
                        <h6 class="mb-3">Ingredients:</h6>
                        <ul class="list-group mb-4">
                            ${recipe.ingredients.map(ingredient => `
                                <li class="list-group-item">
                                    <i class="fas fa-check-circle text-success me-2"></i>
                                    ${ingredient}
                                </li>
                            `).join('')}
                        </ul>
                        <h6 class="mb-3">Instructions:</h6>
                        <ol class="list-group list-group-numbered mb-3">
                            ${recipe.instructions.map(instruction => `
                                <li class="list-group-item">
                                    ${instruction}
                                </li>
                            `).join('')}
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    `;

    let modal = document.getElementById('recipeModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'recipeModal';
        modal.className = 'modal fade';
        document.body.appendChild(modal);
    }

    modal.innerHTML = modalContent;
    const modalInstance = new bootstrap.Modal(modal);
    modalInstance.show();
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Preload default images
    imageUtils.preloadImages();

    // Create necessary containers if they don't exist
    const containers = ['recipe-cards', 'lunch-recipes'];
    containers.forEach(containerId => {
        if (!document.getElementById(containerId)) {
            const container = document.createElement('div');
            container.id = containerId;
            container.className = 'row';
            document.querySelector('main').appendChild(container);
        }
    });

    // Display recipes
    try {
        displayRecipes(healthyRecipes, 'recipe-cards');
        displayRecipes(lunchRecipes, 'lunch-recipes');
    } catch (error) {
        console.error('Error initializing recipes:', error);
    }
});
