/**
 * InMemoryInventory.java
 * app.djxlab.jqmart.model 
 *
 * @author: Dhaval Joshi.
 */
package app.djxlab.jqmart.model;

import java.util.Map;
import java.util.HashMap;

import org.springframework.stereotype.Component;

@Component
public class InMemoryInventory {
	
	public static Map<String, Item> inventory = new HashMap<>();
}
