/**
 * InventoryRepository.java
 * app.djxlab.jqmartapi.repository 
 *
 * @author: Dhaval Joshi.
 */
package app.djxlab.jqmartapi.repository;

import java.util.List;

import app.djxlab.jqmartapi.model.Item;

public interface InventoryRepository {
	
	public void populateInventory();
	
	public List<Item> findAll();
	
	public void processOrder(List<Item> orderItems);
}
