import java.util.ArrayList;
import java.util.List;

// Component
interface MenuComponent {
    String getName();
    double getPrice();
    void print();
}

// Leaf
class MenuItem implements MenuComponent {
    private String name;
    private double price;

    public MenuItem(String name, double price) {
        this.name = name;
        this.price = price;
    }

    @Override
    public String getName() {
        return name;
    }

    @Override
    public double getPrice() {
        return price;
    }

    @Override
    public void print() {
        System.out.println("Item: " + name + ", Price: $" + price);
    }
}

// Composite
class Menu implements MenuComponent {
    private String name;
    private List<MenuComponent> menuComponent = new ArrayList<>();

    public Menu(String name) {
        this.name = name;
    }

    public void addSubItem(MenuComponent subItem) {
        menuComponent.add(subItem);
    }

    @Override
    public String getName() {
        return name;
    }

    @Override
    public double getPrice() {
        double totalPrice = 0;
        for (MenuComponent subItem : menuComponent) {
            totalPrice += subItem.getPrice();
        }
        return totalPrice;
    }

    @Override
    public void print() {
        System.out.println("Category: " + name);
        for (MenuComponent subItem : menuComponent) {
            subItem.print();
        }
    }
}

// Client
public class MenuManagement {
    public static void main(String[] args) {
        // Creating leaf menu items
        MenuComponent pasta = new MenuItem("Spaghetti", 12.99);
        MenuComponent salad = new MenuItem("Caesar Salad", 8.99);
        MenuComponent soup = new MenuItem("Tomato Soup", 6.99);

        // Printing a menu item
        soup.print();
        System.out.println("------------------------------");

        // Creating a submenu
        Menu vegetarianMenu = new Menu("Vegetarian Menu");
        vegetarianMenu.addSubItem(salad);
        vegetarianMenu.addSubItem(soup);

        // Printing a submenu
        vegetarianMenu.print();
        System.out.println("------------------------------");

        // Creating composite menu items (categories)
        Menu mainCourse = new Menu("Main Course");
        mainCourse.addSubItem(pasta);
        mainCourse.addSubItem(vegetarianMenu);

        Menu recommendedMenu = new Menu("Recommended Menu");
        recommendedMenu.addSubItem(soup);

        // Creating the root of the menu (composite)
        Menu restaurantMenu = new Menu("Restaurant Menu");
        restaurantMenu.addSubItem(mainCourse);
        restaurantMenu.addSubItem(recommendedMenu);

        // Printing the entire menu
        restaurantMenu.print();
        System.out.println("------------------------------");

        // Calculating the total price
        double totalPrice = restaurantMenu.getPrice();
        System.out.println("\nTotal Price: $" + totalPrice);
    }
}
