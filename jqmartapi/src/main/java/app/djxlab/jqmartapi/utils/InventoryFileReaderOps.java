/**
 * InventoryFileReaderOps.java
 * app.djxlab.jqmartapi.utils 
 *
 * @author: Dhaval Joshi.
 */
package app.djxlab.jqmartapi.utils;

import java.util.Map;

import app.djxlab.jqmartapi.model.Item;

public interface InventoryFileReaderOps {
	
	public Map<String, Item> readInventoryFromFile(String filename);
}
