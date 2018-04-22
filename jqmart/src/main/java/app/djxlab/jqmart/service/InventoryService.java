/**
 * InventoryService.java
 * app.djxlab.jqmart.service 
 *
 * @author: Dhaval Joshi.
 */
package app.djxlab.jqmart.service;

import java.util.List;

import app.djxlab.jqmart.model.Item;

public interface InventoryService {
	
	public void populateInventory();
	
	public List<Item> findAll();
}
