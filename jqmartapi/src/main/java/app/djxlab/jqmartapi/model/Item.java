/**
 * Item.java
 * app.djxlab.jqmartapi.model 
 *
 * @author: Dhaval Joshi.
 */
package app.djxlab.jqmartapi.model;

public class Item {
	
	private String id;
	
	private String name;
	
	private int quantity;
	
	private double regularPrice;
	
	private double memberPrice;
	
	private TaxStatus taxStatus;
	
	public Item() {
		
	}

	public Item(String id, String name, int quantity, double regularPrice, double memberPrice, TaxStatus taxStatus) {
		this.id = id;
		this.name = name;
		this.quantity = quantity;
		this.regularPrice = regularPrice;
		this.memberPrice = memberPrice;
		this.taxStatus = taxStatus;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Item other = (Item) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public double getRegularPrice() {
		return regularPrice;
	}

	public void setRegularPrice(double regularPrice) {
		this.regularPrice = regularPrice;
	}

	public double getMemberPrice() {
		return memberPrice;
	}

	public void setMemberPrice(double memberPrice) {
		this.memberPrice = memberPrice;
	}

	public TaxStatus getTaxStatus() {
		return taxStatus;
	}

	public void setTaxStatus(TaxStatus taxStatus) {
		this.taxStatus = taxStatus;
	}

	@Override
	public String toString() {
		return "Item [id=" + id + ", name=" + name + ", quantity=" + quantity + ", regularPrice=" + regularPrice
				+ ", memberPrice=" + memberPrice + ", taxStatus=" + taxStatus + "]";
	}

}
