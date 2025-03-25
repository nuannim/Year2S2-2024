// Target Interface
interface Target {
    void request();
}

class concreteTarget implements Target{
    public void request() {
        System.out.println("Target's request");
    }
}

// Adaptee (Existing class with incompatible interface)
class Adaptee {
    public void specificRequest() {
        System.out.println("Adaptee's specific request");
    }
}

// Class Adapter
class ClassAdapter extends Adaptee implements Target {
    @Override
    public void request() {
        specificRequest(); // Using the existing functionality
    }
}

// Client Code
public class ClassAdapterExample {
    public static void main(String[] args) {
        // Using the adapter to access the Target interface
        Target target = new concreteTarget();
        target.request();

        target = new ClassAdapter();
        target.request();
    }
}
