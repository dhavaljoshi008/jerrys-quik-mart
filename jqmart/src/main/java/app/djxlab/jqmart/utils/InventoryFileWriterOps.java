/**
 * InventoryFileWriterOps.java
 * app.djxlab.jqmart.utils 
 *
 * @author: Dhaval Joshi.
 */
package app.djxlab.jqmart.utils;

import java.util.List;

import app.djxlab.jqmart.model.Item;


public interface InventoryFileWriterOps {
	
	public void writeInventoryToFile(List<Item> inventory, String filename);
}
