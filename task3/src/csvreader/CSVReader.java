/* 
    -Task no. : 3
    -Task Description: A program that gets data from csv file and finds:
        1.print name of the actor who has more Oscars from the others
        2.print name of the actor who is the oldest actor or actress who got the Oscar, in what year and for what movie
        3.print the name of the actor who got the more than Oscar in row
    -Author: Ali Abdulkareem Shamit
*/
package csvreader;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class CSVReader {

    public static void main(String[] args) {
        // csv file location
        String fileName = "oscar.csv";
        // Make an object of File class to deat with this csv file
        File file = new File(fileName);
        // variables to store required data       
        int age = 0, year = 0; String movie = "", name = "";
        // Store all data in arrayLists      
        ArrayList ages = new ArrayList<>();
        ArrayList names = new ArrayList<>();
        ArrayList movies = new ArrayList<>();
        ArrayList years = new ArrayList<>();
        try {
            Scanner inputStream = new Scanner(file);
            // while data have new lines
            while (inputStream.hasNextLine()) {
                String data = inputStream.nextLine();
                // remove ',' from csv data to deal with them speartly
                String[] values = data.split(", ");
                year = Integer.parseInt(values[1]);
                age = Integer.parseInt(values[2]);
                name = values[3];
                movie = values[4];
                // in every loop, new data will be stored in every arrayList
                ages.add(age); movies.add(movie); names.add(name); years.add(year);
            }
            inputStream.close();
            
            findMostWinner(names);                  // function to find most winner
            findOldest(ages, names, movies, years); // function to find the oldest 

        } catch (FileNotFoundException ex) {
            ex.printStackTrace();
        }
    }
    // finding the oldest by comparing inital element of age arrayList to every element and returning the laragest element
    public static void findOldest(ArrayList ages, ArrayList names, ArrayList movies, ArrayList years){
        int oldest = (int) ages.get(0);    // age equals first element initialy
        int year = (int) years.get(0);
        String hisMovie = (String) movies.get(0);
        String hisName = (String) names.get(0);
        // loop throw every element of age arrayList
        for (int i = 0; i < ages.size(); i++) {
            // if there is a larger element, let age equals that element
            if (oldest < (int) ages.get(i)) {
                oldest = (int) ages.get(i);
                hisMovie = (String) movies.get(i);
                hisName = (String) names.get(i);
            }
        }
        // print the result       
        System.out.println("The oldest actor: " +hisName+ ", Age: "+ oldest + ", Movie: " + hisMovie + " ,Year: " + year);
    }
    // function to find the most winner by storing actor's winning count in a hashmap (ky and value)
    // the key will be his name and value is his winning count   
    public static void findMostWinner(ArrayList<String> names) {
        Map<String, Integer> counts = new HashMap<>();
        // loop throw actors' names
        for (String name : names) {
            // if winning(key) is previously found, increase count by 1, else count = 1         
            if (counts.containsKey(name)) {
                counts.put(name, counts.get(name) + 1);
            } else {
                counts.put(name, 1);
            }
        }
        // put most winner as inital entry in the map    
        Map.Entry<String,Integer> mostWinner = counts.entrySet().iterator().next();
        //  loop throw every entry i the map      
        for (Map.Entry<String, Integer> entry : counts.entrySet()) {
            // compare entries' values to each other and asign most winner to the largest one         
            if (mostWinner.getValue() < entry.getValue()) {
               mostWinner = entry;
            }
        }
        // print the result
        System.out.println("The most winner: " + mostWinner.getKey() + " = " + mostWinner.getValue()); 
    }    
}