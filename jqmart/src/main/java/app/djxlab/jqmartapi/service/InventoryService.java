/**
 * InventoryService.java
 * app.djxlab.jqmartapi.service 
 *
 * @author: Dhaval Joshi.
 */
package app.djxlab.jqmartapi.service;

import java.util.List;

import app.djxlab.jqmartapi.model.Item;

public interface InventoryService {
	
	public void populateInventory();
	
	public List<Item> findAll();
	
	public void processOrder(List<Item> orderItems);
}
