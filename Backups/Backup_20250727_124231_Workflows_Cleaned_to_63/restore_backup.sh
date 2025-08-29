#!/bin/bash

# Restore Script for Backup_20250727_124231_Workflows_Cleaned_to_63
# This backup contains the project state with exactly 63 workflows

echo "==============================================="
echo "RESTORE SCRIPT - 63 Workflows Clean State"
echo "==============================================="
echo ""
echo "This will restore the project to the state with:"
echo "- 7 Finance Functional Areas"
echo "- 63 Core Business Activities"
echo "- 17 Logical Platforms"
echo "- 63 Detailed Workflows"
echo ""
read -p "Are you sure you want to restore? This will overwrite current files (y/n): " -n 1 -r
echo ""

if [[ $REPLY =~ ^[Yy]$ ]]
then
    echo "Creating backup of current state..."
    TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
    cd "../../../"
    
    if [ -d "site-build" ]; then
        mv site-build "site-build-before-restore-$TIMESTAMP"
        echo "Current site-build backed up to site-build-before-restore-$TIMESTAMP"
    fi
    
    echo "Restoring from backup..."
    cp -r "Backups/Backup_20250727_124231_Workflows_Cleaned_to_63/site-build" .
    cp -r "Backups/Backup_20250727_124231_Workflows_Cleaned_to_63/FP&A Forecasting Platform" .
    cp -r "Backups/Backup_20250727_124231_Workflows_Cleaned_to_63/Overview" .
    cp "Backups/Backup_20250727_124231_Workflows_Cleaned_to_63/"*.md .
    cp "Backups/Backup_20250727_124231_Workflows_Cleaned_to_63/"*.png .
    cp "Backups/Backup_20250727_124231_Workflows_Cleaned_to_63/"*.ts .
    
    echo ""
    echo "Verification:"
    cd site-build/workflows
    COUNT=$(grep -h "name: '" *.ts | sort | uniq | wc -l | tr -d ' ')
    echo "Workflow count: $COUNT (should be 63)"
    
    if [ "$COUNT" -eq "63" ]; then
        echo "✅ Restore successful! Project has exactly 63 workflows."
    else
        echo "⚠️  Warning: Workflow count is $COUNT, expected 63"
    fi
    
    echo ""
    echo "Restore complete!"
else
    echo "Restore cancelled."
fi 