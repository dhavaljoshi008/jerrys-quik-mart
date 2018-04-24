/**
 * InventoryFileWriterOps.java
 * app.djxlab.jqmartapi.utils 
 *
 * @author: Dhaval Joshi.
 */
package app.djxlab.jqmartapi.utils;

import java.util.List;

import app.djxlab.jqmartapi.model.Item;


public interface InventoryFileWriterOps {
	
	public void writeInventoryToFile(List<Item> inventory, String filename);
}
