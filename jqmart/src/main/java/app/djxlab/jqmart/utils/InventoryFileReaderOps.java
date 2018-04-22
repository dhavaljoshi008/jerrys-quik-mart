/**
 * InventoryFileReaderOps.java
 * app.djxlab.jqmart.utils 
 *
 * @author: Dhaval Joshi.
 */
package app.djxlab.jqmart.utils;

import java.util.Map;

import app.djxlab.jqmart.model.Item;

public interface InventoryFileReaderOps {
	public Map<String, Item> readInventoryFromFile(String src);
}
