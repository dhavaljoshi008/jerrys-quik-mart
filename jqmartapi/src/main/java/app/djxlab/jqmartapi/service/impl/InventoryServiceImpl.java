/**
 * InventoryServiceImpl.java
 * app.djxlab.jqmartapi.service.impl 
 *
 * @author: Dhaval Joshi.
 */
package app.djxlab.jqmartapi.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import app.djxlab.jqmartapi.model.Item;
import app.djxlab.jqmartapi.repository.InventoryRepository;
import app.djxlab.jqmartapi.service.InventoryService;
import app.djxlab.jqmartapi.utils.InventoryFileWriterOps;

@Service
public class InventoryServiceImpl implements InventoryService{

	private InventoryRepository inventoryRepository;
		
	public InventoryServiceImpl(InventoryRepository inventoryRepository) {
		this.inventoryRepository = inventoryRepository;
	}
	
	// Populate inventory.
	@Override
	public void populateInventory() {
		inventoryRepository.populateInventory();
	}

	// Get list of items in inventory.
	@Override
	public List<Item> findAll() {
		return inventoryRepository.findAll();
	}

	// Process order.
	@Override
	public void processOrder(List<Item> orderItems) {
		inventoryRepository.processOrder(orderItems);
	}
}
