import java.util.Observable;
import java.util.Observer;

class NewsAgency extends Observable {
    private String news;

    public String getNews() {
        return news;
    }

    public void setNews(String news) {
        this.news = news;
        setChanged(); // Marks the object as changed
        notifyObservers(); // Notifies all observers without passing any argument
        //notifyObservers(news); // Notifies all observers with the updated news

    }
}

class NewsChannel implements Observer {
    private String news;
    private String name;

    public NewsChannel(String name) {
        this.name = name;
    }

    @Override
    public void update(Observable o, Object arg) {
        if (o instanceof NewsAgency) {
            // Instead of receiving the updated news as an argument, directly access it from the subject
            this.news = ((NewsAgency) o).getNews();
            System.out.println(name + ": News is updated");
            // displayNews();
        }
    }

    public void displayNews() {
        System.out.println(name + ": Breaking News - " + news);
    }
}

public class ObserverPatternExample {
    public static void main(String[] args) {
        // Create a NewsAgency (subject)
        NewsAgency newsAgency = new NewsAgency();

        // Create NewsChannels (observers)
        NewsChannel newsChannel1 = new NewsChannel("Channel 1");
        NewsChannel newsChannel2 = new NewsChannel("Channel 2");

        // Register observers with the subject
        newsAgency.addObserver(newsChannel1);
        newsAgency.addObserver(newsChannel2);

        // Set news on the NewsAgency, triggering notifications to observers
        newsAgency.setNews("Java 17 released!");

        // Unregister one observer
        newsAgency.deleteObserver(newsChannel2);

        // Set more news, but only one observer will be notified
        newsAgency.setNews("New features in Java 17!");

        // Displayed news by remaining observer
        newsChannel1.displayNews();
    }
}
