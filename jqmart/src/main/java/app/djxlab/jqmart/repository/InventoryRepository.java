/**
 * InventoryRepository.java
 * app.djxlab.jqmart.repository 
 *
 * @author: Dhaval Joshi.
 */
package app.djxlab.jqmart.repository;

import java.util.List;

import app.djxlab.jqmart.model.Item;

public interface InventoryRepository {
	
	public void populateInventory();
	
	public List<Item> findAll();
}
